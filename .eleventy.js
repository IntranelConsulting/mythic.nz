const fs = require("fs-extra");
const mdIt = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
const mdAnchors = require("markdown-it-anchor");
const sass = require("sass");
const imgShortcode = require("./config/images");

const isProd = process.env.NODE_ENV === "production";

const markdown = mdIt.use(mdAnchors);

const renderCSS = (name) => {
  const result = sass.renderSync({
    file: `./src/styles/${name}.scss`,
    outputStyle: isProd ? "compressed" : "expanded",
    sourceMap: isProd ? false : `${name}.css.map`,
  });

  fs.ensureDirSync("./dist");
  fs.writeFileSync(`./dist/${name}.css`, result.css);
  if (!isProd) {
    fs.writeFileSync(`./dist/${name}.css.map`, result.map);
  }
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("customHelp", function (collectionApi) {
    const articles = collectionApi.getFilteredByTag("help");
    return articles.sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  // Process SCSS
  eleventyConfig.addWatchTarget("./src/styles");

  eleventyConfig.on("beforeBuild", () => {
    renderCSS("style");
    // renderCSS("print");
  });

  // Copy files through to dist folder
  eleventyConfig.addPassthroughCopy("src/*.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });
  eleventyConfig.addPassthroughCopy("src/help/imgs");
  eleventyConfig.addPassthroughCopy("src/.well-known");

  eleventyConfig.setBrowserSyncConfig({
    https: true,
  });

  /* --- Shortcodes --- */

  eleventyConfig.addAsyncShortcode("image", imgShortcode);

  /* --- Filters --- */

  eleventyConfig.addFilter("parseMarkdown", function (value) {
    return markdown.render(value);
  });

  eleventyConfig.addFilter("urlencode", function (value) {
    return encodeURIComponent(value);
  });

  eleventyConfig.addFilter("isActive", function (url, page) {
    const re = /^\/([a-z]+)/i;
    const matches = url.match(re);
    const match = (matches && matches[1]) || "";
    return match === page ? "active" : "";
  });

  // Front-matter options
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->",
  });

  eleventyConfig.setLibrary("md", markdown);

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

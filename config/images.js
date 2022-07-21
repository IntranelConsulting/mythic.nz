const path = require("path");
const image = require("@11ty/eleventy-img");
const sharp = require("sharp");

module.exports = async function imageShortcode(src, alt, widths, sizes, classes) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }
  widths = Array.isArray(widths) ? [...widths, null] : [null];
  sizes = sizes.trim() || "100vw";
  classes = classes.trim() || "";

  const sharpImg = sharp(src);
  const hasAlpha = await (await sharpImg.metadata()).hasAlpha;

  const baseFormat = hasAlpha ? "png" : "jpeg";

  let metadata = await image(src, {
    widths,
    formats: ["avif", "webp", baseFormat],
    outputDir: "./dist/images/",
    urlPath: "/images/",
    filenameFormat: (id, src, width, format, opts) => {
      const ext = path.extname(src);
      const name = path.basename(src, ext)

      return `${name}-${id}-${width}.${format}`
    }
  });

  const ariaHidden = alt.length ? "" : `aria-hidden="true"`;

  let lowsrc = metadata[baseFormat][0];

  return `<picture class="${classes}">
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img src="${lowsrc.url}" width="${lowsrc.width}" height="${
    lowsrc.height
  }" alt="${alt}" title="${alt}" ${ariaHidden} loading="lazy" decoding="async">
    </picture>`;
};

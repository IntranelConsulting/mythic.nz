[![Netlify Status](https://api.netlify.com/api/v1/badges/738d4656-a87d-4da9-8206-c077df0609a5/deploy-status)](https://app.netlify.com/sites/mythic-c4dc9a/deploys)

# Mythic Marketing Website

## Installation

This site depends on the private repository [mythic-brand](https://github.com/IntranelConsulting/mythic-brand) as a Git submodule. See the README there for more information.

To install, alter the usual `clone` command to `git clone --recurse-submodules`. However, if you have already cloned this repository, and the "brand" submodule folder is empty, you will need to run `git submodule init` followed by `git submodule update` instead.

Further information on using submodules can be found in the [Git docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Usage

For development, use `npm start` and for a production build use `npm run build`. When in development, Eleventy and Browser Sync will watch for changes and auto-update the page in the browser.

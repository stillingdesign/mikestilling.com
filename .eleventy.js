const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const mdPrism = require('markdown-it-prism');
const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Config Prism
const nw = new Normalizer({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
    'spaces-to-tabs': 4,
    'remove-initial-line-feed': true,
});

module.exports = (eleventyConfig) => {

    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    const md = new markdownIt({ html: true, });
    md.use(mdPrism);

    // Watch Targets
    eleventyConfig.addWatchTarget("src/assets/sass");
    eleventyConfig.addWatchTarget("src/assets/javascript");

    // Pass throughs
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');
    eleventyConfig.addPassthroughCopy('src/_redirects');
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});

    // Date Formatting
    eleventyConfig.addFilter("dateShort", (dateObj) => { return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_SHORT); });
    eleventyConfig.addFilter("dateFull",  (dateObj) => {  return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_FULL); });

    // Output
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }

};
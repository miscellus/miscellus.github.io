export default async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget('_includes');
};

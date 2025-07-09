export default async function(eleventyConfig) {
	// Configure Eleventy

    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("**/files");
    eleventyConfig.addWatchTarget('_includes');
    eleventyConfig.addWatchTarget('_data');
};

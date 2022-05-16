module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/robot.txt");
    eleventyConfig.addPassthroughCopy("./src/sitemap.xsl");
    
    return {
        dir: {
            input: "src",
            output: "docs",
            // ⚠️ These values are relative to your input directory.
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        }
    };
};
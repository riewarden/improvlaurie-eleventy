const {titleCase} = require("title-case");

// This regex finds all wikilinks in a string
const wikilinkRegExp = /\[\[\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/g

function caselessCompare(a, b) {
    return a.normalize().toLowerCase() === b.normalize().toLowerCase();
}


// try removing backlings, I think they are screwing up the output file structure
module.exports = {
    
    layout: "note.html",
    type: "note",
    permalink: data => `${data.page.fileSlug}/index.html`,
    
    
}

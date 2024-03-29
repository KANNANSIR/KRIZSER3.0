
let fetch = require('node-fetch')
const googleNewsScraper = require('google-news-scraper')
let handler = async (m, {articles  }) => {
// Execute within an async function, pass a config object (further documentation below)
const articles = await googleNewsScraper({
    searchTerm: "Technology",
    prettyURLs: false,
    queryVars: {
        hl:"en-US",
        gl:"US",
        ceid:"US:en"
      },
    timeframe: "5d",
    puppeteerArgs: []
})
}

handler.help = ['technews',]
handler.tags = ['internet']
handler.command = /^(technews|techupdates)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

var express=require('express')
var app=express()
app.use(express.json())

const TikTokScraper = require('tiktok-scraper');
const fs = require('fs');

module.exports = app.listen(3000);

app.get('/hashtag/:tag/:num/:proxy', function(req, res){ 
    (async () => {
        try {
            tag = req.params.tag;
            num = parseInt(req.params.num);
            proxy = req.params.proxy;
            const posts = await TikTokScraper.hashtag(tag, { number: num, proxy:proxy, filetype:`json`});

            console.log(posts);
            res.send(posts)

        } catch (error) {
            console.log(error);
        }
    })();
})






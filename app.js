
var express=require('express')
var app=express()
app.use(express.json())

const TikTokScraper = require('tiktok-scraper');

var port = process.env.port || 3003
module.exports = app.listen(port, ()=>{
    console.log("node server is listening!")
});

app.get('/tiktok/search', function(req, res){ 
    (async () => {
        try {

            tag = req.query.tag;
            num = parseInt(req.query.num);
            proxy = req.query.proxy;
            const posts = await TikTokScraper.hashtag(tag, { number: num, proxy:proxy, filetype:`json`});

            console.log(posts);
            res.send(posts)

        } catch (error) {
            console.log(error);
        }
    })();
})

app.get('/', (req,res) =>{
    res.send("Server from aws is working!")
})






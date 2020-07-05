
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
            if (proxy==null || proxy==''){
                const posts = await TikTokScraper.hashtag(tag, { number: num, filetype:`na`});
            }
            else{
                const posts = await TikTokScraper.hashtag(tag, { number: num, proxy:proxy, filetype:`na`});
            }
            console.log("use with proxy:    " + proxy);
            console.log(posts);
            res.send(posts)

        } catch (error) {
            console.log(error);
        }
    })();
})

app.get('/tiktok/channel', function(req, res){ 
    (async () => {
        try {
            username = req.query.username;
            console.log(username)
            num = parseInt(req.query.num);
            proxy = req.query.proxy;
            if (proxy==null || proxy==''){
                const posts = await TikTokScraper.user(username, { number: num});
            }
            else{
                const posts = await TikTokScraper.user(username, { number: num, proxy:proxy});
            }
            console.log(posts);
            res.send(posts);
        } catch (error) {
            console.log("an eror!");
            console.log(error);
        }
    })();
})



app.get('/', (req,res) =>{
    res.send("Use full route url for info!")
})






var express=require('express')
var app=express()
app.use(express.json())

const TikTokScraper = require('tiktok-scraper');
const fs = require('fs');

module.exports = app.listen(3000);

app.get('/hashtag/:tag/:num', function(req, res){

    tag = req.params.tag
    num = parseInt( req.params.num)

    const hashtag = TikTokScraper.hashtagEvent(tag, { number: num, filetype:true});
    hashtag.on('data', json => {
        try{
            let data = JSON.stringify(json);
            fs.writeFile(tag+'.json', data, function(err, result) {
                if(err) console.log('error', err);
              });
        }
        catch(err){
            console.log(err)
        }
        res.send(json)

    
    });
    hashtag.on('done', () => {
    });
    hashtag.on('error', error => {
    });

    hashtag.scrape();
})




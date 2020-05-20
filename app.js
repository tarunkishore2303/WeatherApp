const express    = require ("express");
const bodyParser = require("body-parser");
const request    = require("request");
const path       = require("path");
const rp         = require("request-promise");
// const js         = require("./public/script")



var app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render("search")
});
app.get("/results", (req,res)=>{
    var query = req.query.search;
    var url = "http://api.weatherapi.com/v1/forecast.json?key=77c92fb308384c12abb61553201105&q="+query+"&days=8"
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
})

app.listen(3000,()=>{
    console.log("Server live !!");
    
})
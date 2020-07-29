const express = require("express");
const axios = require('axios');
const app = express();
const port = 3000;
app.set("view engine", "ejs");

// routes
app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;

    axios.get(url)
    .then(function (response) {
        // handle success
        let data = response.data;
        res.render("results", {data: data});
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
});

app.listen(port, function(){
    console.log("movie app has started");
});
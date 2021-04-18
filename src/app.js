const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 8000;


const inpath = path.join(__dirname, "../public");
const templat = path.join(__dirname, "../templates/views");
const parti = path.join(__dirname, "../templates/partials");
app.set('view engine','hbs');
app.set('views',templat);
hbs.registerPartials(parti);

app.use(express.static(inpath));


app.get("",(req,res)=>{
    res.render('index.hbs')
})

app.get("/about",(req,res)=>{
    res.render('about.hbs')
})

app.get("/index",(req,res)=>{
    res.render('index.hbs')
})
app.get("/weather",(req,res)=>{
    res.render('weather.hbs')
})

app.get("*",(req,res)=>{
    res.render('404error.hbs')
})
app.listen(port,()=>{
    console.log("server start");
});
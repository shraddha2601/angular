const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended : false}));


app.use('/api/posts',(req, res, next) => {
  const posts = [
    {id : 'id1' , title : " First server side post" ,content : "This is comefrom server"},
    {id : 'id2' , title : " second server side post" ,content : "This is comefrom server"}

  ];
  res.status(200).json({
    message : 'Post Fetched Succesfully in angular task project',
    posts : posts
  });


})


module.exports = app;

import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import React from 'react'
import App from '../all/App';
import { StaticRouter } from "react-router-dom";
const port = process.env.PORT || 8080


const app = express();
app.use(express.static('public'))

app.get('*',(req,res,next)=>{
    let markup = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App/>
        </StaticRouter>
        );

    res.status(200).send(`<html><!DOCTYPE html><head>
        <title>SSR with RR</title>
  <script src="/bundle.js" defer></script>
  <link href="/main.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.css" rel="stylesheet">

      </head><body><div id="root">${markup}</div></body></html>`);
})
app.listen(port,function (){
    console.log('Server running');
})
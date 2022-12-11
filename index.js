/*
*
*Title      : Uptime Monitoring application
*Description: A Restful Api To Monitoring up Or Down Time User Defined Links
*Author     : Md. Nuruzzamn (cpik)
*Date       :12/11/22
*
*/

//Dependencies
const http = require('http');

//app object - module Scaffolding

const app = {};

//Configuration

app.config = {
    port:3000
};

//Create Server

app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Server Run Succesfully ${app.config.port}`);
    });
}

//handle Request Response

app.handleReqRes = (req, res) =>{
    //response handle
    res.end('Hello Programmer How are You');
}

//Start the Server
app.createServer();

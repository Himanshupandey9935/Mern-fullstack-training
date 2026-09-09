const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type": "text/plain"});
    res.end("hello this is my first server ");

});
server.listen(0);
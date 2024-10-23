const http=require("http");
const myserver=http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            res.end("Home  page");
            break;
        case "/about":
            res.end("About Page");
            break;
        default:
            res.end("404 page not found!")

    }
});
myserver.listen(8000,()=> console.log("started"))
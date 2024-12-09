var http=require("http")
var server=http.createServer((req,res)=>{
    res.write("sravani\n b.tech\n Svist\n cse\n");
    res.end()  
})
var port=3001;
server.listen(port,()=>{
    console.log("running "+"http://localhost:"+port);
})
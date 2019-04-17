const http = require('http')

const server = http.createServer((req,res)=>{
res.end('hello Ajay Nallanagula');
});

server.listen(4242,()=>{
    console.log('Server is listening on  port 4242, url: http://localhost:4242')
})
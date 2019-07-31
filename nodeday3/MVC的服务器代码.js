// const http = require('http');
// const server = http.createServer();

// const router = require('./MVC路由层代码')

// server.listen(8080, () => {
//     console.log('服务器已开启可以通过 http://127.0.0.1:8080 访问');
// })
// server.on('request', (req, res) => {
//     router(req, res);
// })




const http = require('http');
const server = http.createServer();
const router = require('./MVC路由层代码');
server.listen(8080, () => {
    console.log('你的服务器已开启,可以通过 http://127.0.0.1:8080 访问')
})

server.on('request', (req, res) => {
    router(req, res);
})
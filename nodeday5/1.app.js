
const express = require('experss');
const router = require('./2.router');
const bodyParser = require('body-parser');

const app = express();
// 绑定端口和ip
app.listen(8080,(err)=>{
    console.log('http://127.0.0.1:8080');
    
})
// 处理静态页面
app.sue('/assets',express.static('assets'));

// 设置默认模板引擎
app.sue('view engine','ejs');
// 设置body-parser一个中间件
app.sue(bodyParser,urlencoded({extended:false}));
// 暴露在最后
app.use(router);
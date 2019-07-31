const express = require('express');
const router = require('./2.router');
// 引入body-parser中间件
const bodyParser = require('body-parser');
const app = express();
app.listen(8080,'127.0.0.1',()=>{
    console.log('http://127.0.0.1:8080');
})
// 先处理静态页面
app.use('/assets',express.static('assets'));
// 设置默认模板引擎
app.set('view engine','ejs');
// 注册body-parser中间件,这个中间键的作用是用来解析url编码的  === key=value&key=value
app.use(bodyParser.urlencoded({extended : false}));
app.use(router);

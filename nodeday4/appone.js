const express = require('express');

const fs = require('fs');
const app = express();
app.listen(8080, () => {
    console.log('你的服务器已经开启 http://127.0.0.1:8080 访问');
})
// 先加载全部静态资源
app.use('/assets', express.static('assets'));
// 设置ejs为默认模板引擎
app.set('view engine', 'ejs');
// 约定好处理的网站
// 读取数据,把数据使用ejs渲染
app.get('/index', (req, res) => {
    fs.readFile('./data/hero.json', 'utf-8', (err, data) => {
        if (err) console.log(err);
        let arr = JSON.parse(data);
        res.render('index', { arr })
    })
})
// 引入模块
const express = require('express');
// 创建服务器
const app = express();
// 绑定ip和端口
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
});


// 获取静态资源如果不加文件夹名字在网站上就不需要加文件夹名,加了就要加文件夹名,
//相当于加了就有,不加就没有
app.use('/assets',express.static('assets'));
app.use('/views',express.static('views'));

// app.get('/',(req,res)=>{
//     res.send('你好世界')
// })

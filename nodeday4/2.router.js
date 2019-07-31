const controller = require('./3.controller');
// 引用express模板
const express = require('express');
//express的一个路由方法,而且首写字母为大写
const router = express.Router();

//请求的地址
router.get('/index',(req,res)=>{
    controller.getIndex(req,res);
});

// 新增请求
router.get('/deleteHeroById',(req,res)=>{
    controller.deleteHeroById(req,res);
});
    // 添加英雄
router.get('/add',(req,res)=>{
    controller.getAdd(req,res);
});
router.post('/addNewHero',(req,res)=>{
    controller.addNewHero(req,res);
})
// 把router暴露出去
module.exports = router;
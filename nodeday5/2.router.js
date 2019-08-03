

const experss = require('experss');

const controller = require('./3.controller');
// 创建路由对象,判断请求
const router = experss.Router();

router.get('/index',(req,res)=>{
    controller.getIndex(req,res);
})

router.get('/edit',(req,res)=>{
    controller.getEdit(req,res);
})
// 修改英雄信息的接口
router.get('/edit2',(req,res)=>{
    controller.getEdit2(req,res);
})

// 给一个根据原来的id获取原来数据的接口
router.get('getHeroById',(req,res)=>{
    controller.getHeroById(req,res);
})
// 此时需要一个可以让前段修改英雄的接口
router.post('editHeroById',(req,res)=>{
    controller.editHeroById(req,res);
})

module.exports = router;
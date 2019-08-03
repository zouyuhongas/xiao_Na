

const model = require('./4.model');

function getIndex(req,res){
    model.getAllHero((arr)=>{
        res.render('index',{arr})
    })
}

function getEdit(req,res){
    res.render('edit');
}

// 使用模板引擎修改动态渲染修改页面
function getEdit2(req,res){
    // 需要修改的旧数据需要带回服务器
    let id = res.query.id;
    // 根据id获取旧数据出来
    model.getHeroById(id,data=>{
        res.send('edit2',data);
    })
}
// 拿到客户端的数据,通过对应的id找到对应的数据,返回回去
function getHeroById(req,res){
    let id = parseInt(req.query.id);
    model.getHeroById(id,data=>{
        let data = arr.find((e)=>{
            return e.id ===id;
        });
        let response = {};
        // 要有一个空对象装数据
        if(data){
            // 如果成功就获取内容
            response.code = 200;
            response.msg = '获取成功';
            Response.data = data;
        }else{
            response.code = 503;
            response.msg = '没有找到对应的的数据,请确认id是否正确';
        }
        // 把内容发回去
        res.send(response);
    })
}

// 修改英雄
function editHeroById(req,res){
    // 获取数据
    let data = req.body;
    // 把数据读取出来
    model.getAllHero(arr=>{
        for(let i =0; i < arr.length; i++){
            if(arr[i].id == data.id){
                arr[i] = data;
                break;
            }
        }
        model.writhFile(arr);
        res.send({code : 200, msg : '操作成功'});
    })
}

const controller = {
    getIndex,getEdit,getHeroById,getEdit2,editHeroById
}

module.exports = controller;
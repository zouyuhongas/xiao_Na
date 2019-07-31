const model = require('./4.model');

let controller = {
    getIndex(req,res){
        model.getAllHero((arr)=>{
            res.render('index',{arr});
        })
    },
    // 删除的方法
    deleteHeroById(req,res){
        let id = req.query.id;
        model.getAllHero((arr)=>{
            for(let i =0; i < arr.length; i++){
                if(arr[i].id ===id){
                    arr.splice(i,1);
                    break;
                }
            }
            model.writeFile(arr);
            res.send({code : 200 , msg : '成功'})
        })
    },
    getAdd(req,res){
        res.render('add')
    },
    addNewHero(req,res){
        model.getAllHero((arr)=>{
            model.getMaxId((maxId)=>{
                req.body.id = maxId +1;
                // 合并
                arr.push(req.body);
                // 写入
                model.writeFile(arr);
                // 返回成功
                res.send({code : 200,msg : '成功'});
            })
        })
    }
}

module.exports = controller;

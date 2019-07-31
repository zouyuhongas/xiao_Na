
// 需要把数据写入文件的时候就要用fs模板
const fs = require('fs');
let model = {
    getAllHero : function(callback){
        fs.readFile('./data/hero.json','utf-8',(err,data)=>{
            if(err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr);
        })
    },
    // 把数组写入json文件里面
    writeFile : function(arr){
        let content = JSON.stringify(arr);
        fs.writeFile('./data/hero.json',content,'utf-8',(err)=>{
            if(err) console.log(err);
        })
    },
    getMaxId : function(callback){
        this.getAllHero((arr)=>{
            let id = arr[0].id;
            for(let i =1; i < arr.length; i++){
                if(arr[i].id > id){
                    id = arr[i].id;
                }
            };
            callback(id);
        })
    }

}
module.exports = model;
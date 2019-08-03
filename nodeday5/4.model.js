

const fs = require('fs');

function getAllHero(callback){
    fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        if(err) console.log(err);
        let arr = JSON.stringify(data);
        callback(arr);
    })
}
// 获取相同id
function getHeroById(id,callback){
    this.getAllHero((arr)=>{
        let data = arr.find(e=>{
            return e.id == id;
        })
        callback(data);
    })
}

function  writeFlie(arr){
    let content = JSON.stringify(arr);
    fs.writeFile('./data/heros.json',content,'utf-8',err=>{
        if(err) console.log(err);
    })
}
module.exports = {
    getAllHero,getHeroById,
}
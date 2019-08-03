const fs = require('fs');

// 引入mysql模板
const mysql = require('mysql');
module.exports = {
  getAllHero,writeFile,addNewHero,deleteHeroById
};

let conn = mysql.createConnection({
  host : '127.0.0.1',
  port : 3306,
  user : 'root',
  password : 'root',
  database : 'lol',
})

function getAllHero(callback){
//  从数据库读取数据
// 1.创建连接
// 2.准备sql语句
// 查询所有的数据
let sql = `SELECT * FROM hero WHERE isDelete = 0`
// 执行sql语句
conn.query(sql,(err,result)=>{
  if(err) console.log(err);
  callback(result);
})
}

function addNewHero(data,callback){
  let sql = `INSERT INTO hero SET \`img\`='${data.img}',\`name\`='${data.name}',\`gender\`='${data.gender}'`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}

function writeFile(arr){
  let content = JSON.stringify(arr);
  fs.writeFile('./data/heros.json',content,'utf-8',err=>{
    if(err) {
      console.log(err);
    }
  })
}

function deleteHeroById(id,callba){
  let sql = `UPDATE hero SET isDelete = 1 WHERE id =${id}`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}



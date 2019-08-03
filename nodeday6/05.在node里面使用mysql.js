

/**
 * 
 *  2. 引入
 *  3. 记住操作数据库的步骤：
 *    3.1 创建一个连接对象
 *    3.2 开始连接(新版的mysql会自动连接)
 *    3.3 准备一个你想要执行的sql语句
 *    3.4 把sql语句执行
 *    3.5 关闭连接
 * 
 */


// const  mysql = require('mysql');
// let content = mysql.createConnection({
//     host : '127.0.0.1',
//     port : 3306,
//     uesr : root,
//     password : root,
//     database : 'lol'
// });

// content.connect();

// let sql = 'UPDATE heros SET isDelete = 1 WHERE id = 4';

// content.query(sql,(err,result,filed)=>{
//     // err代表的是返回错误的信息,如果有错后面的两个就编程undefined
//       if(err) console.log(err);
//         // result - sql语句执行的结果 - 如果是查询,result是一个数组,如果不是查询result就是一个对象那个
//       console.log(result);
//         filed - 如果是查询,才有,查询结果除开之后,是所有的字段
//       console.log(filed);
// })

// content.end();


const mysql = require('mysql');

let conn = mysql.createConnection({
    host : '127.0.0.1',
    post : 3306,
    user : 'root',
    password : 'root',
    database : 'lol'
})

conn.connect();
let sql = `UPDATA heros SET isDelete = 1 WHERE id = 4`;

conn.query(sql,(err,result,filed)=>{
    if(err) console.log(err);
    console.log(result);
    console.log(filed);
})
conn.end();

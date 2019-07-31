

// const fs = require('fs');
// const template = require('art-template');
// const queryString = require('querystring');
// const model = require('./MVC里的数据模型层');

// let controller = {

//     staticResource: function (req, res) {
//         if (req.url.endsWith('.css')) {
//             res.setHeader('Content-Type', 'text/css;charset=utf-8');
//         }
//         fs.readFile(__dirname + req.url, (err, data) => {
//             if (err) console.log(err);
//             res.end(data);
//         })
//     },
//     // 处理主页的方法
//     getIndexHtml: function (req, res) {
//         model.getAllHero(function (array) {
//             let html = template(__dirname + '/views/index.html', { array });
//             res.end(html);
//         })
//     },
//     // 添加英雄页面的展示
//     getAddHtml: function(req,res){
//         model.getAddHtml((data)=>{
//             res.end(data)
//         })
//     },
        // 添加最大id
//     addNewHero: function (req, res) {
//         let data = '';
//         req.on('data', (chunck) => {
//             data += chunck;
//         });
//         req.on('end', () => {
//             data = queryString.parse(data);
//             model.getAllHero((arr) => {
//                 model.getMaxId((MaxId) => {
//                     data.id = MaxId + 1;
//                     arr.push(data);
//                     model.writeFile(arr);
//                     let result = { code: 200, msg: '操作成功' };
//                     res.end(JSON.stringify(result));
//                 })
//             })
//         })
//     }

// }

// module.exports = controller;


const fs = require('fs');
const template = require('art-template');
const queryString = require('querystring');
const model = require('./MVC里的数据模型层');

let controller = {
    staticResource : function(req,res){
        if(req.url.endsWith('.css')){
            res.setHeader('Content-Type','text/css;charset=utf-8');
        } 
        fs.readFile(__dirname+ req.url,(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        })
    },
    getIndexHtml : function(req,res){
        model.getAllHero(function(array){
            let html = template(__dirname+'/views/index.html',{ array });
            res.end(html);
        })
    },
    getAddHtml : function(req,res){
        model.getAddHtml((data)=>{
            res.end(data);
        })
    },
    addNewHero : function(req,res){
        let data = '';
        req.on('data',(chunck)=>{
            data += chunck;
        });
        req.on('end',()=>{
            data = queryString.parse(data);
            model.getAllHero((arr)=>{
                model.getMaxId((maxId)=>{
                    data.id = maxId+1;
                    arr.push(arr);
                    model.writeFile(data); 
                    let result = {code : 200 , msg : '操作成功'};
                    res.end(JSON.stringify(result));
                })
            })
        })
    }
}

module.exports = controller;
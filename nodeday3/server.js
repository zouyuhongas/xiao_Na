/* const http = require('http');
const server = http.createServer();
const queryString = require('queryString');
const fs = require('fs');
server.listen(8080,'127.0.0.1',()=>{
    console.log('服务器已开启 http://127.0.0.1:8080 访问');
})

server.on('request',(req,res)=>{
    // 处理页面中需要的的静态资源
    if(req.url.startsWith('/assets')){
        if(req.url.endsWith('.css')){
            res.setHeader('Content-Type','text/css;charset=utf-8');
        }
        // 读取文件
        fs.readFile(__dirname + req.url,(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        })
    }else
    // 处理add.html的请求
    if(req.url ==='/views/add.html'){
        fs.readFile('./views/add.html',(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        });
    }else
    if(req.url ==='/addNEWHero' && req.method === 'POST'){
        let data = '';
        req.on('data',(chunck)=>{
            // 把每次接收到的数据拼接起来
            data += chunck;
        });
        // 接收完毕之后开始处理数据
        req.on('end',()=>{
            // 得到的数据是url格式的编码,要解析成对象
            // 需要一个queryString的核心模块
            data = queryString.pares(data);
            // 实现新增
            fs.readFile('./data/heros.json','utf-8',(err,content)=>{
                if(err) console.log(err);
                let arr = JSON.parse(content);
                let id = arr[0].id;
                for(let i =1; i < arr.length; i++){
                    if(arr[i].id < id){
                        id = arr[i].id;
                    }
                }
                data.id = id + 1;
                // 数据合并
                arr.push(data);
                // 写入json文件
                let jsonStr = JSON.stringify(arr);
                fs.writeFile('./data/heros.json',jsonStr,'utf-8',(err)=>{
                    if(err){

                    }else{
                        let result = JSON.stringify({code : 200 , msg : '操作成功'});
                        res.end(result);
                    }
                })
            })
        })
    }
}) */



const http = require('http');
const fs =require('fs');
const server = http.createServer();
server.listen(8080,"127.0.0.1",()=>{
  console.log('http://127.0.0.1:8080');
})

server.on('request',(req,res)=>{
    if(req.url.startsWith('/assets') || req.url.startsWith('/views')){
        if(req.url.endsWith('.css')){
            res.setHeader('Content-Type','text/css')   
        }
        fs.readFile('.'+req.url,(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        });

    }else
    if(req.url ==='/views/add.html'){
        fs.readFile('./views/add.html',(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        });
    }else
    if(req.url === '/addNewHero' && req.method=== 'POST'){
        let data = '';
        req.on('data',(chunck)=>{
            data += chunck;
        });
        req.on('end',()=>{
            data = queryString.pares(data);
            fs.readFile('/data/heros.json','utf-8',(err,content)=>{
                if(err) console.log(err);
                let arr = JSON.parse(content);
                let id = arr[i].id;
                for(let i =1; i < arr[i].id; i++){
                    if(arr[i].id < id){
                        id = arr[i].id;
                    }
                }
                data = id +1;
                arr.push(data);
                let jsonStr = JSON.stringify(arr);
                fs.writeFile('./data/heros.json',jsonStr,'utf-8',(err)=>{
                    if(err){

                    }else{
                        let result = JSON.stringify({ code : 200,msg : '操作成功'});
                        res.end(result);
                    }
                })
            })
        })
    }
})
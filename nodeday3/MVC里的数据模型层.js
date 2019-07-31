

/**
该模型只负责两件事
读取json文件,返回数组
得到一个数组,往json文件里面存

*/

const fs = require('fs');

let model = {
    // 一个是读取json文件,返回数组的方法
    getAllHero: function (callback) {
        fs.readFile('./data/heros.json', (err, data) => {
            if (err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr);
        })
    },
    getAddHtml: function (callback) {
        fs.readFile('./views/add.html', (err, data) => {
          if (err) console.log(err);
          callback(data)
        })
      },
    writeFile: function (arr) {
        let content = JSON.stringify(arr);
        fs.writeFile('./data/heros.json', content, 'utf-8', (err) => {
            if (err) console.log(err);
        })
    },
    getMaxId: function (callback) {
        this.getAllHero((arr) => {
            let id = arr[0].id;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i].id > id) {
                    id = arr[i].id;
                }
            }
            callback(id)
        })
    }
};

module.exports = model;
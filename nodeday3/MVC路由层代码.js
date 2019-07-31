// /**
//  * 
//  * @param {object} req 请求对象
//  * @param {object} res 响应对象
//  */
// const controller = require('./MVC里面的业务逻辑层');

// let router = function (req, res) {
//     //  判断请求地址,分发请求
//     if (req.url.startsWith('/assets')) {
//         controller.staticResource(req, res);
//     } else
//         if (req.url === '/views/add.html') {
//             controller.getAddHtml(req, res);
//         } else
//             if (req.url === '/views/index.html') {
//                 controller.getIndexHtml(req, res);
//             } else
//                 if (req.url === '/addNewHero' && req.method === 'POST') {
//                     controller.addNewHero(req, res);
//                 }
// }

// module.exports = router;




/**
 * @param {object} req 请求对象
 * @param {object} res 响应对象
 * 
 */

const controller = require('./MVC里面的业务逻辑层');

let router = function (req, res) {
    // 判断请求地址,分发请求
    if (req.url.startsWith('/assets')) {
        controller.staticResource(req, res);
    } else
        if (req.url === '/views/add.html') {
            controller.getAddHtml(req, res);
        } else
            if (req.url === '/views/index.html') {
                controller.getIndexHtml(req, res);
            } else
                if (req.url === '/addNewHero' && req.method === 'POST') {
                    controller.addNewHero(req, res);
                }
};


module.exports = router;
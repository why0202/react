var express = require('express');
var router = express.Router();
// 第三方模块
const multer = require('multer');
const path = require('path');

// 设置上传文件路径：没有后缀名
// const upload = multer({ dest: 'uploads/' });

// 配置上传参数
let storage = multer.diskStorage({
  // 上传文件保存目录，无则自动创建
  destination: './public/images/',
  // 格式化文件名
  filename: function (req, file, cb) {
    // 获取文件后缀名
    let ext = path.extname(file.originalname);

    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
})

// 设置文件保存目录
let upload = multer({ storage });

router.post('/upload', upload.single('file'), function (req, res, next) {
  // 后端接收文件格式的数据
  // 普通文本 -> req.body
  // 文件 -> multer中间件格式化到req.file
  console.log('avatar:', req.file);
  res.send(req.file);
})



// router.post('/upload', function (req, res, next) {
//     var data  = [];
//     req.on("data",(chunk)=>{
//         data.push(chunk)
//     })
//     req.on("end",()=>{
//         var buffer = Buffer.concat(data);
//         fs.writeFile("./a.png",buffer,(err)=>{
//             if(!err){
//                 res.end("ok")
//             }
//         })
//     })
    // if (req.busboy) {
    //     req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    //         var saveTo = path.join(__dirname.replace('routes', 'static'), 'b.png');
    //         file.pipe(fs.createWriteStream(saveTo));
    //         file.on('end', function () {
    //             //在这边可以做一些数据库操作
    //             res.json({
    //                 success: true
    //             });
    //         });
    //     });
    //     req.pipe(req.busboy);
    // }

// });
module.exports = router;

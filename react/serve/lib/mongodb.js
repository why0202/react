const {
    MongoClient,
    ObjectId
} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'test';

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err) {
                throw err
                reject(err);
            } else {
                resolve(client)
            }
        })
    })
}
// 查找
const find = async (table, params, callback) => {
    let client = await connect();
    let db = client.db(dbName);
    let collection = db.collection(table);
    let data = await new Promise((resolve, reject) => {
        collection.find(params).toArray(function (err, docs) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    })
    // 关闭连接
    client.close();
    callback(data);
}

// find('user', {

// }, (results) => {
//     console.log(results.length);
// })

// 分页
const findnum = async (table, params, page, num, callback) => {
    let client = await connect();
    let db = client.db(dbName);
    let collection = db.collection(table);
    let data = await new Promise((resolve, reject) => {
        collection.find(params).skip(page).limit(num).toArray(function (err, docs) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    })
    // 关闭连接
    client.close();
    await find('user', {}, (results) => {
        // console.log(results.length);
        callback({
            'data': data,
            'num': results.length
        });
    })
}

// findnum('user', {
// }, 2, 2, (results) => {
//     console.log(results);
// })





// 增加(可多条)  insert（'表名'，[{},({},{})]）
const insert = async (table, params, callback) => {
    let client = await connect();
    let db = client.db(dbName);
    let collection = db.collection(table);
    let data = await new Promise((resolve, reject) => {
        collection.insertMany(params, function (err, result) {
            if (err) {
                throw err
                reject(err)
            } else {
                resolve(result)
                client.close();
            }
        })
    })
    callback(data);
}

// insert('user', [{
//     'name': 'w',
//     'tel': '1351743'
// }], (result) => {
//     console.log(result.result.ok);
// })


// 更新  updata（'表名',{条件},{设置},fn（））
const update = async (table, params, params2, callback) => {
    let client = await connect();
    let db = client.db(dbName);
    let collection = db.collection(table);
    let data = await new Promise((resolve, reject) => {
        collection.updateOne(params, {
            $set: params2
        }, function (err, result) {
            if (err) {
                throw err
                reject(err)
            } else {
                resolve(result)
                client.close();
            }
        });
    })
    // 关闭连接
    client.close();
    callback(data);
}
// 更新  updata（'表名'，｛条件｝，｛设置｝，fn（））
// update('user', {
//     'tel': '1351743'
// }, {
//     'name': 'vic',
// }, (result) => {
//     console.log(result.result.ok);
// })


//删除 
const del = async (table, params, callback) => {
    let client = await connect();
    let db = client.db(dbName);
    let collection = db.collection(table);
    let data = await new Promise((resolve, reject) => {
        collection.deleteOne(params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);

            }
        })
    });
    // 关闭连接
    client.close();
    callback(data);
}

// del('user', {
//     'name': 'w',
// }, (result) => {
//     console.log(result.result.ok);
// })


module.exports = {
    find,
    insert,
    update,
    del,
    findnum,
    // 根据id查找
    ObjectId
}
const device = require('../Model/deviceModel');

let addDevice = async (ctx, next) => { // 拿所有故事
    //发送http
    ctx.response.body = '你好！'
}


module.exports = {
    'GET /addDevice': addDevice,
};

// 127.0.0.1:端口号/addDevice

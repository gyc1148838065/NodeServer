const ws = require("nodejs-websocket");
const Observer = require('../Observer/Socket.js')




class SocketClient {
    constructor(port) {
        this.port = port;
        this.Run()
    }
    Run() {
        //断线由心跳包控制
        ws.createServer(function (conn) {  //在人进来的时候，需要把他的conn连接池和他的身份id给关联对应起来
            conn.on("text", function (str) {  //接收字符串类型的数据,如果客户端传输的是字符串在这里接收
                Observer.emit('SocketToApp', conn, newData, 0)
            })
            conn.on("close", function (code, res) {
                console.log('触发关闭删除')
            })
            conn.on("error", function (err) {

                console.log('发生错误删除')

            })
            conn.on("binary", function (inStream) {
                inStream.on("readable", async function () {   //接收流数据
                    var newData = inStream.read();
                    if (newData) {
                        Observer.emit('SocketToApp', conn, newData, 1)
                    }
                })
            })
        }).listen(this.port);
    }
}

module.exports = SocketClient;

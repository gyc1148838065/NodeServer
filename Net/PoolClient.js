const Observer = require('../Observer/Tcp.js')



class TPoolClient {
    constructor(port) {
        this.port = port;
        this.Run();
    }
    destroy() {

    }

    Run() {
        const net = require('net')
        let server = net.createServer()
        server.on('connection', clientSocket => {
            console.log('有新的客户端连接了')
            //服务端通过 clientSocket 监听 data 事件
            clientSocket.on('data', data => {
                // console.log(data)
                // 把数据转换成字符串格式
                Observer.emit('ClientTcp', data);
                console.log('来自客户端消息:', data.toString())
            })
        })
        server.on("close", function () {
            console.log("server closed!");
        })

        /* 设置错误时的回调函数 */
        server.on("error", function (err) {
            console.log("error!");
        })
        server.listen(port)
    }
}

module.exports = TPoolClient;

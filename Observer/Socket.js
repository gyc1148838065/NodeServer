var Observer = require('../Observer');




Observer.on('SocketToApp', function (conn,newData,type) {
    if(type ==0){  //字符串
        console.log(newData)
        
    }else if(type == 1){ //流数据
        console.log(newData)

    }

})

module.exports = Observer;

# NodeServer



该项目主要是模板，

主要功能：TCP服务，Socket服务，HTTP服务，Mysql查询



技术栈：node+sequelize+qs+nodejs-websocket+koa


该项目为了更好的处理异步问题，采用了event模块来进行业务处理


首先：使用npm install 安装插件

在config.js文件中进行配置,如果链接了数据库，可以在Model文件夹中进行定义数据模型，提供一个例子文件 deviceModel.js，模型定义完需要把接口给暴露出去，给外面的文件调用


如果使用的是不同的数据库那么在复制一份SqlDB进行配置(是数据库)



如果都配置完成,则直接node app.js 启动项目


127.0.0.1:55003 //是tcp服务的地址

127.0.0.1:30008 //是socket服务的地址

127.0.0.1:11111  //是http服务的地址

可以网页请求127.0.0.1:11111/addDevice   查看返回是否成功


如需要添加多个接口


直接添加，http是采用的koa使用过koa的应该不会陌生
let addDevice = async (ctx, next) => { // 拿所有故事
    //发送http
    ctx.response.body = '你好！'
}

let addDevice1 = async (ctx, next) => { // 拿所有故事
    //发送http
    ctx.response.body = '你好1！'
}

module.exports = {
    'GET /addDevice': addDevice,
    'GET /addDevice1': addDevice1,
};

在controllers文件夹下面构建js文件 把接口暴露出来都可以通过http请求

具体实现代码可看 controller.js里面的逻辑

TCP和Socket的逻辑代码处理都是在Observer文件夹下面进行处理,采用了event模块进行一个OBserver的设计


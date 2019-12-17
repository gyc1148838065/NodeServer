const configMysql = {
    database: '', //使用那个数据库
    username: '用户名', //用户名
    password: '密码',//密码
    host: '数据库地址',  //地址
    port: 3306 //端口
};

module.exports = {
    PoolPort : 55003,
    SocketPort :30008,
    configMysql:configMysql,
    HttpPort:11111
}

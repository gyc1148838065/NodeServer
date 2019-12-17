const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const cors = require('koa2-cors');  //解决ajax跨域问题

let config = require("./config");
// 创建下XBPool的socket...
let PoolC = require("./Net/PoolClient");

let Socket = require("./Net/SocketClient");

PoolC = new PoolC(config.PoolPort)

Socket = new Socket(config.SocketPort)

const app = new Koa();

// log request URL:
app.use(cors());
app.use(async(ctx, next) => {
    /*console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);*/

    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(config.HttpPort);


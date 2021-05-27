const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const port = 3000;

// Route to handle GET request
router.get('/index', async (ctx, next) => {
    ctx.body = "<h1>WELCOME TO INDEX PAGE</h1>";
    await next();
});

router.get('/hakkimda', async (ctx, next) => {
    ctx.body = "<h1>WELCOME TO HAKKIMDA PAGE</h1>";
    await next();
});

router.get('/iletisim', async (ctx, next) => {
    ctx.body = "<h1>WELCOME TO ILETISIM PAGE</h1>";
    await next();
});

app.use(router.routes()); // route middleware

if (require.main === module) {
    app.listen(port); // default
    console.log(`Port ${port} is listening`);
}
module.exports = app;
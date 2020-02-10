const Router = require('express').Router;

const indexRouter = new Router();

indexRouter.get('/', (req, res) => {
    res.render('index.html');
});

module.exports = indexRouter;
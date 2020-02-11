const breweriesDao = require('../data_access/breweries');

const Router = require('express').Router;

const breweriesRouter = new Router();

// Do we want a service layer here?
// Router => Service => DAO?
breweriesRouter.get('/', async (req, res) => {
    const params = req.params;

    const query = {
        type: req.queryString('type'),
        state: req.queryString('state')
    };

    const breweries = await breweriesDao.getBreweries(query);

    return res.json({
        count: breweries.length,
        breweries
    })
});

module.exports = breweriesRouter;
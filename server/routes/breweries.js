const breweriesDao = require('../data_access/breweries');

const Router = require('express').Router;

const breweriesRouter = new Router();

// Do we want a service layer here?
// Router => Service => DAO?
breweriesRouter.get('/', async (req, res) => {
    try {
        const query = {
            type: req.queryString('type'),
            state: req.queryString('state')
        };
    
        const breweries = await breweriesDao.getBreweries(query);
    
        return res.status(200).json({
            count: breweries.length,
            breweries
        });
    }
    catch(err) {
        return res.status(500).json({
            error: true,
            message: err.toString()
        });
    }
});

module.exports = breweriesRouter;
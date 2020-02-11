const request = require('superagent');

const url = 'https://api.openbrewerydb.org/breweries';

module.exports = {
    getBreweries: async ({type, state}) => {
        const response = await request(url).query({
            by_type: type,
            by_state: state
        });

        if(!response.ok) throw new Error('Failed to get breweries from API');

        return response.body;
    }
};
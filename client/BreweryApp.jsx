import React from 'react';
import request from 'superagent';

import BreweryForm from './BreweryForm.jsx';
import BreweryList from './BreweryList.jsx';

export default class BreweryApp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            breweries: []
        };
    }

    async searchBreweries(query) {

    }

    render() {
        return (
            <div>
                <BreweryForm onSearch={(query) => this.searchBreweries(query)}/>
                <BreweryList breweryList={this.state.breweries}/>
            </div>
        );
    }
}
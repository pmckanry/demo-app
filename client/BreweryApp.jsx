import React from 'react';
import request from 'superagent';
import _ from 'lodash';

import { Alert, Card, Form } from 'react-bootstrap';

import BreweryForm from './BreweryForm.jsx';
import BreweryList from './BreweryList.jsx';

export default class BreweryApp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            breweries: [],
            filterValue: '',
            error: ''
        };

        this.setBreweryFilter = _.debounce((val) => {
            this.setState({filterValue: val});
        }, 250);
    }

    componentDidMount() {
        this.searchBreweries({});
    }

    async searchBreweries(query) {
        try {
            this.setState({error: ''});

            const response = await request.get(this.props.url).query(query);

            if(!response.ok) throw new Error('Failed to retrieve breweries');

            this.setState({
                breweries: response.body.breweries
            });
        }
        catch(err) {
            this.setState({error: err.toString()});
        }
    }

    getFilteredBreweries() {
        const breweries = [...this.state.breweries];

        const filter = new RegExp(this.state.filterValue);

        return breweries.filter((val) => {
            if(filter.test(val.id) ||
               filter.test(val.name) ||
               filter.test(val.type) ||
               filter.test(val.city) ||
               filter.test(val.state) ||
               filter.test(val.country) ||
               filter.test(val.website_url)) {
                return true;
            }
            return false;
        });
    }

    render() {
        const filteredBreweries = this.getFilteredBreweries();

        return (
            <div style={{padding: '15px'}}>
                {this.state.error && (
                    <Alert variant='danger'>{this.state.error}</Alert>
                )}
                <Card body bg="info" style={{marginBottom: '15px'}}>
                    <BreweryForm onSearch={(query) => this.searchBreweries(query)}/>
                </Card>
                <Form.Control type="input" placeholder="Filter..." onChange={(evt) => this.setBreweryFilter(evt.target.value)} />
                <BreweryList breweryList={filteredBreweries}/>
            </div>
        );
    }
}
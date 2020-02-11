import React from 'react';

import { Form, Button, Col } from 'react-bootstrap';

export default class BreweryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            state: ''
        }
    }

    searchForBreweries() {
        const query = { ...this.state };

        if(query.state === '') delete query.state;
        if(query.type === '') delete query.type;

        this.props.onSearch(query);
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col}  sm={4} controlId="formBreweryType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" onChange={(evt) => this.setState({type: evt.target.value})}>
                            <option></option>
                            <option>Micro</option>
                            <option>Regional</option>
                            <option>Brewpub</option>
                            <option>Large</option>
                            <option>Planning</option>
                            <option>Bar</option>
                            <option>Contract</option>
                            <option>Proprietor</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm={4} controlId="formBreweryState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" onChange={(evt) => this.setState({state: evt.target.value})}>
                            <option></option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virginia</option>
                            <option>Washington</option>
                            <option>West Virginia</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="light" onClick={() => this.searchForBreweries()}>
                    Submit
                </Button>
            </Form>
        );
    }
}
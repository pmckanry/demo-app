import React from 'react';

import { Table } from 'react-bootstrap';

export default class BreweryList extends React.Component {
    render() {
        const list = this.props.breweryList.map(b => (
            <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.type}</td>
                <td>{b.city}</td>
                <td>{b.state}</td>
                <td>{b.country}</td>
                <td><a href={b.website_url}>{b.website_url}</a></td>
            </tr>
        ));
         
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
        );
    }
}
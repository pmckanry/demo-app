import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import BreweryApp from './BreweryApp.jsx';

// TODO : Change to be brought in from server
const url = "http://localhost:3000/breweries";

ReactDOM.render(
    <BreweryApp url={url} />,
    document.getElementById('app')
);
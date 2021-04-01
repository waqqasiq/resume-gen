import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from './home';

import { Route, BrowserRouter as Router } from "react-router-dom";

const Routing = (
    <Router>
        <Route exact path="/" component={Home}/>
        
    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

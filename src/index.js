import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from './home';
import Resume from './resume';
import SplashScreen from './splashscreen';


import { Route, BrowserRouter as Router } from "react-router-dom";
import Personalize from './personalize';

const Routing = (
    <Router>
        <Route exact path="/" component={SplashScreen}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/personalize" component={Personalize}/>
        <Route exact path="/resume" component={Resume}/>
        
    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

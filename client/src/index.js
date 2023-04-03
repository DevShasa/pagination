import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter , Switch, Route} from  "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/page/:pageNumber" component={App}/>
            <Route exact path="/page" component={App}/>
        </Switch>
    </BrowserRouter>
);


import React from 'react';
import '../assets/css/app.css';
import { Route } from 'react-router-dom';
import Nav from './nav';
import SecretDoc from './secret_doc';
import OperativeList from './operative_list';
import Home from './home';
import About from './about';

const App = () => (
    <div>
        <Nav />
        <div className="app">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/secret-doc" component={SecretDoc} />
            <Route path="/operative-list" component={OperativeList} />
        </div >
    </div>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import think from './middleware/think';
import App from './components/app';
import types from './actions/types';

const store = createStore(rootReducer, {}, applyMiddleware(think));

if (localStorage.getItem('token')) {
    store.dispatch({
        type: types.SIGN_UP
    })
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

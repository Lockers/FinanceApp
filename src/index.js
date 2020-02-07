import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { reducer } from './store/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { App } from './App';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger)),
)

const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    rootElement
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Provider as mProvider } from 'mobx-react';
import { createStore } from 'redux';
import reducer from './Store/Reducer';
import BirdStore from './Store/BirdsStore';

const store = createStore(reducer);

const Root = (
    <mProvider BirdStore={BirdStore}>
        <App />
    </mProvider>
)

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducers from './store/reducers';


const store = createStore(reducers, applyMiddleware(thunk));
      
 

const app = (
   <Provider store={store}>
         <BrowserRouter>
             <App />
         </BrowserRouter>
   </Provider>     
);

ReactDOM.render(app,document.getElementById('root'));
serviceWorker.unregister();

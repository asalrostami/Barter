import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './store/reducers/auth';
import userReducer from './store/reducers/user';


const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
      
 

const app = (
   <Provider store={store}>
         <BrowserRouter>
             <App />
         </BrowserRouter>
   </Provider>     
);

ReactDOM.render(app,document.getElementById('root'));
serviceWorker.unregister();

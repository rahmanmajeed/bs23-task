
/**
 * =================================================
 * configure redux center store using redux
 * =================================================
 */

 import { applyMiddleware, createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import Thunk from 'redux-thunk';
 import rootReducer from './rootReducer';
 
 // Creating Store Through Root Reducer & Thunk Implementation
 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));
 
 export default store;

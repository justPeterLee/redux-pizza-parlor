import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';;
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';


const order = (state = 0, action) => {
    if(action.type === 'SET_ORDER') {
        // return state.push(action.payload)
        return state = action.payload
    }
    
    return state;
}

const pizzaOrder = (state =[ ], action) => {
    if(action.type === 'ADD_PIZZA_ORDER') {
        return state = [...state, action.payload]
    }
    else if(action.type === 'REMOVE_PIZZA_ORDER') {
        for(let i = 0; i < state.length; i++) {
            if(action.payload.id === state[i].id) {
                state.splice(i, 1);
                return state;
            }
        }
    }
    else {
        return state;
    }
}

const addCustomer = (state = 0, action) => {
    if(action.type === "ADD_CUSTOMER"){
        return state = action.payload
    }
    else{
        return state
    }

    //console.log(state)


    // return state
    
}
const storeInstance = createStore(
    combineReducers({
        order,
        pizzaOrder,
        addCustomer
    }),
    applyMiddleware(logger)

)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));






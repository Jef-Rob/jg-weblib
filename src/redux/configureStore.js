import thunk from 'redux-thunk'
import reducer from './ducks/productDuck'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({});

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, loggerMiddleware]
};

const rootReducer = combineReducers({
    reducer
});

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(...middleware)
);

export default store;
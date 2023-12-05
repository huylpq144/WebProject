import { combineReducers, compose, applyMiddleware, legacy_createStore } from 'redux';
// import other reducers
import { addToCartReducer } from './reducers/addToCartReducer';
import { productDetailReducer } from './reducers/productDetailReducer';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    addToCartReducer,
    productDetailReducer,
});

export const store = legacy_createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

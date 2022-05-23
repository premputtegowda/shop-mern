import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { composewithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers'
const reducer = combineReducers({
    productList: productListReducer
})
const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
)




   export default store
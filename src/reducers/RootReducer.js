import cart from './CartReducers'
import {combineReducers} from 'redux'
// the object returned by this function must have a key named `cart` since `cart`
// will be a *prop* on our Cart container element
const rootReducer = combineReducers({
  cart
})

export default rootReducer

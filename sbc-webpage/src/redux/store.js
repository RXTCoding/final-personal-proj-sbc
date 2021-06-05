import {createStore,combineReducers} from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    authReducer: authReducer,
    cartReducer: cartReducer 
})

export default createStore(rootReducer)


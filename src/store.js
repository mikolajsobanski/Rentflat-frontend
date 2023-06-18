import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { legacy_createStore as createStore} from 'redux'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { offerDeleteReducer, offerFilterListReducer, offerListReducer, offerUserListReducer } from './reducers/offerReducers'
import { offerSingleReducer} from "./reducers/offerReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    offerList: offerListReducer,
    offerUserList: offerUserListReducer,
    offerDelete: offerDeleteReducer,
    offerSingleGet: offerSingleReducer,
    offersFilterList: offerFilterListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin:{userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store
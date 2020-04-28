import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import {authReducer} from "../Auth/AuthReducer"
import {restaurantsReducer} from "../RestaurantsLIST/RestaurantsReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    rests: restaurantsReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store

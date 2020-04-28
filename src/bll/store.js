import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import {authReducer} from "./AuthReducer"
import {restaurantReducer} from "./RestaurantsLIST/RestaurantReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    rests: restaurantReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store

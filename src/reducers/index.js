import EmployReducer from "./EmployReducer";
import userReducer from "./userReducer";
import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer";


const rootReducer  = combineReducers({
    EmployReducer,
    userReducer,
    LoginReducer
})

export default rootReducer;
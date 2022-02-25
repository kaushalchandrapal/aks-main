import { combineReducers } from "redux";
import allContactsReducer from "../Pages/ContactbooksComponent/reducers/allContacts";

const rootReducer = combineReducers({
    allContactsReducer,
});
export default rootReducer;
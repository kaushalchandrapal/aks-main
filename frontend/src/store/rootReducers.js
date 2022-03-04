import { combineReducers } from "redux";
import allContactsReducer from "../Pages/ContactbooksComponent/reducers/allContacts";
import addContactReducer from "../Pages/AddContact/reducers/addContact";

const rootReducer = combineReducers({
    allContactsReducer,
    addContactReducer,
});
export default rootReducer;
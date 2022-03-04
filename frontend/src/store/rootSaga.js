import { all } from 'redux-saga/effects';
import allContactsSaga from "../Pages/ContactbooksComponent/sagas/allContatcts";
import addContactSaga from "../Pages/AddContact/sagas/addContact";

export default function* rootSaga() {
    yield all([
        allContactsSaga(),
        addContactSaga(),
    ]);
};
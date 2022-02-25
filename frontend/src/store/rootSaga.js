import { all } from 'redux-saga/effects';

import allContactsSaga from "../Pages/ContactbooksComponent/sagas/allContatcts";

export default function* rootSaga() {
    yield all([
        allContactsSaga(),
    ]);
};
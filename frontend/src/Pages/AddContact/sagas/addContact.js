import axios from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { addContact, addContactSuccess, addContactError } from '../reducers/addContact';

const addContactFunction = async data => {
    const API_DATA = await axios.post('/addContact', data)
        .then(res => res)
        .catch(error => error);
    return API_DATA;
}

function* addContactRequest (data) {
    try {
        const body = data.payload;
        const response = yield call(addContactFunction, body);
        const res = yield response.data;
        if (response && response.status >= 500) {
            yield put(addContactError(response));
        } else if (response && response.status >= 400) {
            yield put(addContactError(response));
        } else if (response && response.status >= 200) {
            yield put(addContactSuccess(res));
        } else {
            yield put(addContactError(response))
        }
    } catch (error) {
        yield put(addContactError(error))
    }
}

export default function* rootSaga() {
    yield all([takeEvery(addContact, addContactRequest)]);
}
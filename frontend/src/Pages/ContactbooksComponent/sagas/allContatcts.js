import axios from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { allContacts, allContactsSuccess, allContactsError } from '../reducers/allContacts';

const allContactsFunction = async () => {
    const API_DATA = await axios.get('/allContact')
        .then(res => res)
        .catch(error => error);
    return API_DATA;
}

function* allContactsRequest () {
    try {
        const response = yield call(allContactsFunction);
        const res = yield response.data;
        if (response && response.status >= 500) {
            yield put(allContactsError(response));
        } else if (response && response.status >= 400) {
            yield put(allContactsError(response));
        } else if (response && response.status >= 200) {
            yield put(allContactsSuccess(res));
        } else {
            yield put(allContactsError(response))
        }
    } catch (error) {
        yield put(allContactsError(error))
    }
}

export default function* rootSaga() {
    yield all([takeEvery(allContacts, allContactsRequest)]);
}
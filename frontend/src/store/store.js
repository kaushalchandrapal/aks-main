import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducers.js';
import rootSaga from './rootSaga.js';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;

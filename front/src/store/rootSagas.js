import {all} from 'redux-saga/effects';
import mailSaga from "./sagas/mailSagas";

export default function* rootSagas() {
    yield all([
      ...mailSaga,
    ])
}
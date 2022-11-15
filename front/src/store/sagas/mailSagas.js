import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {createMailFailure, createMailRequest, createMailSuccess} from "../actions/mailActions";
import {addNotification} from "../actions/notifierActions";

export function* sendMail ({payload: mailData}) {
  try {
    yield axiosApi.post('/mails', mailData);
    yield put(createMailSuccess());
    yield put(addNotification({message: 'Carrier created!', variant: 'success'}));
  } catch (e) {
    yield put(createMailFailure());
    yield put(addNotification({message: 'Carrier creation failed!', variant: 'error'}));
  }
}

const mailSaga = [
  takeEvery(createMailRequest, sendMail),
];

export default mailSaga;
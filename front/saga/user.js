import axios from 'axios'
import { all, fork, takeLatest, call, put } from 'redux-saga/effects'
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user'

function* loginAPI() {
    //서버에요청을보내는부분
}

function* login() {
    try {
        yield call(loginAPI)
        yield put({
            type: LOG_IN_SUCCESS,
        })
    } catch (e) { //login 실패
        console.error(e)
        yield put({
            type: LOG_IN_FAILURE,
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login)
}

export default function* userSaga() {
    yield all([
        fork(watchLogin)
    ])
}
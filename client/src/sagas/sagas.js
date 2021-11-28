import {
    call,
    // delay,
    fork,
    put,
    // select,
    // take,
    takeEvery,
    // takeLatest,
  } from 'redux-saga/effects';
import { 
  addPost, 
  addPostSuccess } from '../actions/Posts';
import *as Types from './../constant/actionTypes'

function*watchListPost(action){
    console.log()
    yield true;
}
function*addPostSaga (post){
  const {payload} = post;
  // console.log('payload', post.payload);
  // const {post} = payload.post;
  const resp = yield call(addPost,payload);
  // console.log(resp);
  yield put(addPostSuccess(resp))
}


function* rootSaga() {
    yield fork(watchListPost)
    yield takeEvery(Types.ADD_POST, addPostSaga );

  }

export default rootSaga;

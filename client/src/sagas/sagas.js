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
import { addSearch, addSearchSuccess } from '../actions/Search';
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
function*addSearchSaga(search) {
  console.log('SEARCH',search)
  const resp = yield call(addSearch,search.payload);
  console.log('saga_search:',resp);
  yield put(addSearchSuccess(resp.payload))

  yield true;

}

function* rootSaga() {
    yield fork(watchListPost)
    yield takeEvery(Types.ADD_POST, addPostSaga );
    yield takeEvery(Types.SEARCH, addSearchSaga );

  }

export default rootSaga;

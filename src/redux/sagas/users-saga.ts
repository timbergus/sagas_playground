import { put, call, takeEvery } from 'redux-saga/effects';

import {
  getUsersRequest,
  getUsersSuccess,
  getUsersFail,
} from '../reducers/users';

const apiURL = 'https://jsonplaceholder.typicode.com/users';

const getAPI = async () => {
  const response = await fetch(apiURL);
  return await response.json();
};

function* fetchUsers() {
  try {
    const users = yield call(getAPI);
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersFail(error.message));
  }
}

function* usersSaga() {
  yield takeEvery(getUsersRequest.type, fetchUsers);
}

export default usersSaga;

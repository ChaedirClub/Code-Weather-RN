// fetchDataSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../actions/home';
import { FETCH_DATA_REQUEST, FetchDataRequestAction } from '../../interface/reduxHome.interface';
import { fetchWeatherData } from '../../api/weather.api';

function* fetchDataSaga(action: FetchDataRequestAction): Generator<any, any, any> {
  try {
    // Extract lat and lon from the action payload
    const { lat, lon,location } = action.payload;
    const data = yield call(fetchWeatherData, lat, lon,location);
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    console.log(error); 
    yield put(fetchDataFailure(error.toString())); 
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

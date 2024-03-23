import { dataList } from "../../interface/dataList.interface";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, HomeActionTypes } from "../../interface/redux.interface";

export const fetchDataRequest = (lat: number, lon: number): HomeActionTypes => ({
  type: FETCH_DATA_REQUEST,
  payload: {lat, lon}
});

export const fetchDataSuccess = (data: dataList): HomeActionTypes => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): HomeActionTypes => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

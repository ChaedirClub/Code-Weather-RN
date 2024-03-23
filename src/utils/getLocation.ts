import GetLocation from "react-native-get-location";
import { fetchDataRequest } from "../store/actions/home";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "redux";

export const getCurrentLocation = async (dispatch:Dispatch<UnknownAction>): Promise<void> => {
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        // @ts-ignore
        dispatch(fetchDataRequest(location.latitude, location.longitude));
      })
      .catch(error => {
        console.warn(error.code, error.message);
      });
};
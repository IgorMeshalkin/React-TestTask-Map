import {put, takeEvery} from 'redux-saga/effects'
import {getRouteLineFailure, getRouteLineFetch, getRouteLineSuccess} from "../store/slices/routeLineSlice";
import axios from "axios";
import {getQueryStringByRoute} from "../utils/routes";

const polyline = require('polyline');

const callAPI = async (route) => {
    return await axios.get(getQueryStringByRoute(route))
}

function* fetchRouteLine({payload}) {
    yield put(getRouteLineFetch());
    try {
        const response = yield callAPI(payload);
        if (response.status === 200) {
            yield put(getRouteLineSuccess(polyline.decode(response.data.routes[0].geometry)))
        } else {
            yield put(getRouteLineFailure())
        }
    } catch (Exception) {
        yield put(getRouteLineFailure())
    }
}

function* routeLineSaga() {
    yield takeEvery('route/selectRoute', fetchRouteLine)
}

export default routeLineSaga;
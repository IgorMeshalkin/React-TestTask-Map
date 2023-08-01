import {configureStore} from "@reduxjs/toolkit";
import routeList from './routeListSlice'
import currentRouteReducer from './currentRouteSlice'

export default configureStore({
    reducer: {
        routeList: routeList,
        currentRoute: currentRouteReducer
    },
});
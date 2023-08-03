import {configureStore} from "@reduxjs/toolkit";
import routeList from './slices/routeListSlice'
import currentRoute from './slices/currentRouteSlice'
import routeLine from './slices/routeLineSlice'
import createSagaMiddleware from "redux-saga";
import routeLineSaga from '../sagas/routeLineSaga'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        routeList: routeList,
        currentRoute: currentRoute,
        routeLine: routeLine
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(routeLineSaga)
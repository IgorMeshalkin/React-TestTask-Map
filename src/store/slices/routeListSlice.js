import {createSlice} from "@reduxjs/toolkit";
import {getRoutes} from "../../utils/routes";

const routeListSlice = createSlice({
    name: 'routeList',
    initialState: {
        routeList: getRoutes()
    },
    reducers: {}
});

export default routeListSlice.reducer;
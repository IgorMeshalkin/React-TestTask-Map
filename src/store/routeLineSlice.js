import {createSlice} from "@reduxjs/toolkit";

const routeLineSlice = createSlice({
    name: 'routeLine',
    initialState: {
        routeLine: {
            pointsArray: [],
            isLoading: false
        }
    },
    reducers: {
        getRouteLineFetch(state) {
            state.routeLine.isLoading = true;
        },
        getRouteLineSuccess(state, action) {
            state.routeLine.pointsArray = action.payload
            state.routeLine.isLoading = false;
        },
        getRouteLineFailure(state) {
            alert('Не удалось получить маршрут, повторите попытку позже')
            state.routeLine.isLoading = false;
        }
    }
})

export const {getRouteLineFetch, getRouteLineSuccess, getRouteLineFailure} = routeLineSlice.actions;
export default routeLineSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

const currentRouteSlice = createSlice({
    name: 'route',
    initialState: {
        route: {}
    },
    reducers: {
        selectRoute(state, action) {
            state.route = action.payload;
        }
    }
})

export const {selectRoute} = currentRouteSlice.actions;
export default currentRouteSlice.reducer;
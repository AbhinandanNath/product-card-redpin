
import { configureStore, createSlice } from "@reduxjs/toolkit";

const errorInitialState = {
    error: []
}
const errorSlice = createSlice({
    name: 'errorSlice',
    initialState: errorInitialState,
    reducers: {
        setError: (state, action) => {
            let errorData =  action.payload;
            let errorIndex = state.error.findIndex((error) => error.id === errorData.id);
            if (errorIndex === -1) {
                state.error.push(errorData);
            } else {
                state.error[errorIndex] = errorData;
            }
        },
        removeError: (state, action) => {
            let errorId = action.payload.id;
            let errorIndex = state.error.findIndex((error) => error.id === errorId);
            if (errorIndex !== -1) {
                state.error[errorIndex].visible = false;
                state.error.splice(errorIndex, 1);
            }
        },
        clearError: (state) => {
            state.error = null;
        },
    },
})

const store = configureStore({
    reducer: {
        errorState: errorSlice.reducer,
    },
});


export const errorSliceActions = errorSlice.actions;
export default store;
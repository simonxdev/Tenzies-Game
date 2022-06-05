import {createSlice} from "@reduxjs/toolkit"

const initialState = [1,2,3,4,5,6,7,8,9,10]

export const diceSlice = createSlice({
    name: "dice",
    initialState: {value: initialState},
    reducers: {
        nums: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const {nums} = diceSlice.actions;
export default diceSlice.reducer;
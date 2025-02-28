import {createSlice} from "@reduxjs/toolkit"


const uiSlice = createSlice({
    name: 'ui',
    initialState: {showCart: false},
    reducers: {
        toggleShowCart(state){
            state.showCart = !state.showCart
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;

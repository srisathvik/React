import {configureStore} from '@reduxjs/toolkit'
// import cartReducer from './cart-slice';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const items = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default items;
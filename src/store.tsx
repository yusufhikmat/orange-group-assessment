import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './redux/slice/productSlice';
import { productsApi } from './redux/api/ProductsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer, { getTotals } from './redux/slice/cartSlice';
const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(productsApi.middleware);
	},
});
setupListeners(store.dispatch);
store.dispatch(getTotals());
export default store;

import { createSlice, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CartItem {
	id: string;
	title: string;
	cartTotalQuantity: number;
	price: number;
}

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? (JSON.parse(localStorage.getItem('cartItems') as string) as CartItem[])
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		/*-------------FUNCTION TO ADD TO CART-------------------*/
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item: any) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartTotalQuantity += 1;
				toast.info(
					`increased ${state.cartItems[itemIndex].title} product quantity`,
					{
						position: 'top-right',
					}
				);
			} else {
				const newItem = { ...action.payload, cartTotalQuantity: 1 };
				state.cartItems.push(newItem);
				toast.success(`${action.payload.title} added to cart`, {
					position: 'top-right',
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		/*-------------FUNCTION TO REMOVE TO CART-------------------*/

		removeFromCart(state, action) {
			const newLists = state.cartItems.filter(
				(item: CartItem) => item.id !== action.payload.id
			);
			state.cartItems = newLists;
			toast.error(`decreased ${action.payload.title} product quantity`, {
				position: 'top-right',
			});
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		/*-------------FUNCTION TO DECREASE FROM CART-------------------*/

		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item: CartItem) => item.id === action.payload.id
			);
			if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
				state.cartItems[itemIndex].cartTotalQuantity--;
				toast.error(`decreased ${action.payload.title} product quantity`, {
					position: 'top-right',
				});
			} else if (state.cartItems[itemIndex].cartTotalQuantity === 1) {
				const newLists = state.cartItems.filter(
					(item: CartItem) => item.id !== action.payload.id
				);
				state.cartItems = newLists;
				toast.error(`decreased ${action.payload.title} product quantity`, {
					position: 'top-right',
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		/*-------------FUNCTION TO CLEAR ALL CART-------------------*/
		clearCart(state) {
			state.cartItems = [];
			toast.error('All product cleared', {
				position: 'top-right',
			});
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		getTotals(state) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItems) => {
					const { price, cartTotalQuantity } = cartItems;
					const totalItem = price * cartTotalQuantity;
					cartTotal.total += totalItem;
					cartTotal.quantity += cartTotalQuantity;
					return cartTotal;
				},
				{ total: 0, quantity: 0 }
			);
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const { addToCart, removeFromCart, decreaseCart, clearCart } =
	cartSlice.actions;
export const getTotals = createAction('cart/getTotals');
export default cartSlice.reducer;

import React, { useEffect } from 'react';
import './Cart.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from '../../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface Product {
	id: string;
	title: string;
	image: string;
	cartTotalQuantity: number;
	price: number;
}
export const Cart = () => {
	const cart = useSelector((state: any) => state.cart);
	console.log(cart);
	const dispatch = useDispatch();

	const handleDelete = (id: string) => {
		const confirmDelete = window.confirm(
			`Are you sure you want to delete this item ? `
		);
		if (confirmDelete) {
			dispatch(removeFromCart({ id }));
			console.log('deleted');
		}
	};

	const handleDecreaseCart = (item: Product) => {
		dispatch(decreaseCart(item));
	};

	const handleIncreaseCart = (item: Product) => {
		dispatch(addToCart(item));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	useEffect(() => {
		dispatch(getTotals());
	}, [dispatch, cart]);
	return (
		<main className="cart">
			<h3 className="cart-heading-title">Shopping Cart</h3>

			{cart.cartItems.length === 0 ? (
				<div className="empty-cart">
					<p className="empty">Empty cart</p>
					<Link className="navigate-home" to="/">
						Click here to navigate to home page
					</Link>
				</div>
			) : (
				<>
					<button className="btn-clear" onClick={() => handleClearCart()}>
						Clear cart
					</button>

					<div className="cart-lists">
						<div className="cart-list-product">
							<div className="cart-heading">
								<h3>PRODUCT</h3>
								<h3>PRICE</h3>
								<h3>TOTAL</h3>
							</div>
							<div className="">
								{cart.cartItems?.map((item: Product) => {
									return (
										<div key={item.id} className="cart-list-details">
											<div className="cart-list-left">
												<div className="cart-list-image">
													<img
														src={item.image}
														alt="product"
														className="cart-product-image"
													/>
												</div>
												<div className="cart-list-text">
													<p>{item.title}</p>
													<FaRegTrashAlt
														onClick={() => handleDelete(item.id)}
														className="cart-delete"
													/>
												</div>
											</div>
											<div className="price-quantity">
												<p className="cart-price">$ {item.price}</p>
												<p className="cart-quantity">
													<button
														onClick={() => handleDecreaseCart(item)}
														className="btn"
													>
														{' '}
														-{' '}
													</button>
													<button className="btn">
														{' '}
														{item.cartTotalQuantity}{' '}
													</button>
													<button
														onClick={() => handleIncreaseCart(item)}
														className="btn"
													>
														{' '}
														+{' '}
													</button>
												</p>
											</div>

											<p className="cart-price">
												$ {item.price * item.cartTotalQuantity}
											</p>
										</div>
									);
								})}
							</div>
						</div>
						<div className="cart-total">
							<div className="total-price">
								<h3>SubTotal</h3>
								<p className="cart-price">$ {cart.cartTotalAmount}</p>
							</div>

							<button className="btn-checkout">Checkout</button>
							<Link to="/" className="navigate-backhome">
								{' '}
								<FaArrowLeft /> Continue shopping
							</Link>
						</div>
					</div>
				</>
			)}
		</main>
	);
};

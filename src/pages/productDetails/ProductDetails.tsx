import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { FaSplotch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/slice/cartSlice';
import { useGetSingleProductQuery } from '../../redux/api/ProductsApi';
import { addToCart } from '../../redux/slice/cartSlice';
import { Product } from '../../models/product.models';

const ProductDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, isLoading } = useGetSingleProductQuery(id || '');
	console.log(data);

	const handleAddToCart = (data: any) => {
		dispatch(addToCart(data));
	};

	return (
		<section className="product-details">
			{isLoading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="details">
					<div className="product-details-left">
						<img
							src={data?.image}
							alt="product"
							className="product-details-img"
						/>
					</div>
					<div className="product-details-right">
						<div className="product-details-title">
							<b>Title :</b> {data?.title}
						</div>
						<div className="product-details-price">
							<b>Price :</b> $ {data?.price}
						</div>
						<div className="product-details-rate">
							<b>
								Rating : <FaSplotch />
							</b>
							{data?.rating.rate}
						</div>
						<div className="product-details-count">
							<b>Count :</b> {data?.rating.count}
						</div>
						<div className="product-details-category">{data?.category}</div>
						<div className="product-details-desc">{data?.description}</div>
						<div className="product-details-button">
							<button
								className="product-details-btn"
								onClick={() => handleAddToCart(data)}
							>
								Add product
							</button>
							<button
								className="product-details-cart"
								onClick={() => {
									navigate('/');
								}}
							>
								Go to cart
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default ProductDetails;

import React, { useState, useEffect } from 'react';
import { useGetAllProductsQuery } from '../../redux/api/ProductsApi';
import { FaSplotch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AllProduct.css';
import { Product } from '../../models/product.models';

interface AllProductProps {
	search: string;
	// setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const AllProduct = ({ search }: AllProductProps) => {
	const { data } = useGetAllProductsQuery();
	const [searchData, setSearchData] = useState(data);
	console.log(searchData);
	console.log(data);

	useEffect(() => {
		const filterData = data?.filter((item: any) =>
			item.title.toLowerCase().includes(search.toLowerCase())
		);
		setSearchData(filterData);
	}, [data, search]);

	return (
		<div className="all-products-page">
			{searchData?.length === 0 && (
				<h3 className="empty-search">No word match</h3>
			)}
			{searchData?.map((product: Product, index: number) => {
				return (
					<div key={`${product.id}-${index}`} className="all-products">
						<Link to={`/product/${product.id}`} className="all-products-link">
							<div className="all-products-image">
								<img
									src={product.image}
									alt="product"
									className="all-products-img"
								/>
							</div>
							<div className="all-products-details">
								<h3 className="all-products-title">{product.title}</h3>
								<p className="all-products-spans">
									<span className="all-products-price">$ {product.price}</span>
									<span className="all-products-rating">
										<b className="all-products-icon">
											<FaSplotch />
										</b>
										<b className="all-products-rate">{product.rating?.rate}</b>
									</span>
								</p>
								<p className="all-products-category">{product.category}</p>
								<button className="all-products-btn">View details</button>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default AllProduct;

import React, { useState } from 'react';
import Hero from '../../components/heroSection/Hero';
import { useGetAllProductsQuery } from '../../redux/api/ProductsApi';
import AllProduct from '../../components/allProducts/AllProduct';
import './Home.css';

const Home = () => {
	const [search, setSearch] = useState('');
	const { isLoading, error } = useGetAllProductsQuery();
	return (
		<section>
			<Hero />
			<form className="form-search">
				<label htmlFor="search"></label>
				<input
					id="search"
					type="text"
					name="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="search"
				/>
			</form>
			<div className="product-home">
				<h3 className="home-title">All Product</h3>
				{isLoading ? (
					<div className="loading">Loading...</div>
				) : error ? (
					<div> an error occur</div>
				) : (
					<AllProduct search={search} />
				)}
			</div>
		</section>
	);
};

export default Home;

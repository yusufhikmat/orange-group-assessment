import React, { useState } from 'react';
import {
	useGetAllProductsQuery,
	useUpdateProductMutation,
} from '../../redux/api/ProductsApi';
import { useParams } from 'react-router-dom';

type UpdateUserProps = {
	setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const EditProduct = ({ setEditOpen }: UpdateUserProps) => {
	const { data = [] } = useGetAllProductsQuery();
	const product = data.length > 0 ? data[0] : null;
	console.log(product);
	const [title, setTitle] = useState(product?.title || '');
	const [price, setPrice] = useState(product?.price || '');
	const [image, setImage] = useState(product?.image || '');
	const [desc, setDesc] = useState(product?.description || '');
	const [category, setCategory] = useState(product?.category || '');
	const [rate, setRate] = useState(product?.rating.rate || '');
	const [count, setCount] = useState(product?.rating.count || '');

	const [updateProduct] = useUpdateProductMutation();
	const { id } = useParams();
	console.log(id);
	const productId = data.find((productData) => productData.id === id);
	console.log(id, productId);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await updateProduct({
				id: id,
				title: title,
				description: desc,
				category: category,
				image: image,
				price: price,
				rating: {
					rate: rate,
					count: count,
				},
			});
			// refetch();
			// Reset the form fields
			setTitle('');
			setCategory('');
			setCount('');
			setPrice('');
			setImage('');
			setRate('');
			setDesc('');

			// Close the form after successful submission
			setEditOpen(false);
		} catch (error) {
			console.error('Error adding product:', error);
		}
	};

	return (
		<div className="addUser">
			<h3>Edit user details</h3>
			<form className="addUserForm" onSubmit={handleSubmit}>
				<div className="adduserInput">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						required
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="adduserInput">
					<label htmlFor="category">Category</label>
					<input
						type="text"
						required
						name="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</div>
				<div className="adduserInput">
					<label htmlFor="image">Image</label>
					<input
						type="file"
						required
						name="image"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
				</div>
				<div className="adduserInput">
					<label htmlFor="price">price</label>
					<input
						type="number"
						required
						name="price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="adduserInput">
					<label htmlFor="rate">Rate</label>
					<input
						type="number"
						required
						name="rate"
						value={rate}
						onChange={(e) => setRate(e.target.value)}
					/>
				</div>
				<div className="adduserInput">
					<label htmlFor="count">Count</label>
					<input
						type="number"
						required
						name="count"
						value={count}
						onChange={(e) => setCount(e.target.value)}
					/>
				</div>
				<button type="submit">Edit Product</button>
			</form>
		</div>
	);
};

export default EditProduct;

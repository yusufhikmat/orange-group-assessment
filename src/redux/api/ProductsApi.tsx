import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../models/product.models';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com/',
	}),
	tagTypes: ['Product'],
	endpoints: (builder) => ({
		getAllProducts: builder.query<Product[], void>({
			query: () => 'products',
			providesTags: ['Product'],
		}),
		getSingleProduct: builder.query<Product, string>({
			query: (id) => `products/${id}`,
			providesTags: ['Product'],
		}),
		updateProduct: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `products/${id}`,
				method: 'PATCH',
				rest,
			}),
			invalidatesTags: ['Product'],
		}),
	}),
});
export const {
	useGetAllProductsQuery,
	useGetSingleProductQuery,
	useUpdateProductMutation,
} = productsApi;

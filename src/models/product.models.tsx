export interface Product {
	id: string;
	title: string;
	description: string;
	category: string;
	image: string;
	price: string;
	rating: {
		rate: number;
		count: number;
	};
}

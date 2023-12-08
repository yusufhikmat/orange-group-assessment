import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { Cart } from './pages/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/productDetails/ProductDetails';
import NotFound from './pages/notFound/NotFound';
import EditProduct from './pages/editProduct/EditProduct';

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Navbar />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				{/* <Route path="/edit-product/:id" element={<EditProduct />} /> */}
				<Route path="/carts" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

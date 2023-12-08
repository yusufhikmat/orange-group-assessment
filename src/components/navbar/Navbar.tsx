import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const state = useSelector((state: any) => state.cart);
	const navigate = useNavigate();
	console.log(state);
	return (
		<nav>
			<div className="nav-logo">
				<Link to="/" className="logo-title">
					<span>Shopping</span>
				</Link>
			</div>
			<div className="nav-menu" onClick={() => navigate('/carts')}>
				<span className="nav-cart">Cart</span>
				<span className="nav-cart-icon">
					<FaCartPlus />
				</span>
				<span className="nav-cart-number">{state.cartItems.length}</span>
			</div>
		</nav>
	);
};

export default Navbar;

import { createContext, useState } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;


const CustomProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const addToCart = (product, qty) => {
		const newProduct = {
			...product,
			qty,
		};
		if(IsInCart(product.id)){
			const FindProduct = cart.find(product => product.id === newProduct.id);
			const index = cart.indexOf(FindProduct);
			const newCart = [...cart];
			newCart[index].qty += qty;
			setCart(newCart);
		} else {
			setCart([...cart, newProduct]);
		}
	}

	const IsInCart = (id) => {
		return cart.some(product => product.id === id);
	}

	const removeFromCart = (id) => {
		const newCart = cart.filter(product => product.id !== id);
		setCart(newCart);
	}

	const ClearCart = () => {
		setCart([]);
	}

	const getProductsQty = () => {
		let qty = 0;
		let price = 0;
		cart.forEach((product) => {
			qty += product.qty;
			price += product.price * product.qty;
		});
		setCartTotal({qty:qty, price:price});
		return cartTotal;
	}

	const ContextValue = {
		cart,
		addToCart,
		removeFromCart,
		ClearCart,
		getProductsQty,
		IsInCart,
	}

	return (
		<Provider value={ContextValue}>
			{children}
		</Provider>
	)
}

export default CustomProvider;	

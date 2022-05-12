import {
	addDoc,
	serverTimestamp,
	collection,
	updateDoc,
	doc,
	getDoc,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

export const CartContext = createContext([]);

const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState([]);
	const [buyer, setBuyer] = useState("");
	const [buyerInfo, setBuyerInfo] = useState(false);
	const [bundleBuyID, setBundleBuyID] = useState("");

	useEffect(
		(cartTotal) => {
			const getProductsQty = () => {
				let qty = 0;
				let price = 0;
				cart.forEach((product) => {
					qty += product.qty;
					price += product.price * product.qty;
				});
				setCartTotal({ qty: qty, price: price });
				return cartTotal;
			};
			getProductsQty();
			if (cartTotal === undefined) {
				return;
			}
		},
		[cart]
	);

	const addToCart = (product, qty) => {
		const newProduct = {
			...product,
			qty,
		};
		if (IsInCart(product.id)) {
			const FindProduct = cart.find(
				(product) => product.id === newProduct.id
			);
			const index = cart.indexOf(FindProduct);
			const newCart = [...cart];
			newCart[index].qty += qty;
			setCart(newCart);
		} else {
			setCart([...cart, newProduct]);
		}
	};

	const IsInCart = (id) => {
		return cart.some((product) => product.id === id);
	};

	const removeFromCart = (id) => {
		const newCart = cart.filter((product) => product.id !== id);
		setCart(newCart);
	};

	const ClearCart = () => {
		setCart([]);
		setBundleBuyID("");
	};

	const endPurchase = () => {
		if (buyerInfo) {
			const sellCollection = collection(db, "sell history");
			addDoc(sellCollection, {
				buyer,
				product: cart,
				price: cartTotal.price,
				date: serverTimestamp(),
			}).then((result) => {
				setBundleBuyID(result.id);
				stockUpdate();
			});
		}
	};

	const stockUpdate = () => {
		cart.forEach((product) => {
			const orderDoc = doc(db, "libros", product.id);
			getDoc(orderDoc).then((snapshot) => {
				let searchProd = { id: snapshot.id, ...snapshot.data() };
				let updatedStock = searchProd.stock - product.qty;
				updateDoc(orderDoc, { stock: updatedStock });
			});
		});
	};

	const buyerData = (values) => {
		setBuyer({
			name: values.name,
			email: values.mail,
			direction: values.direction,
			phone: values.phone,
		});
		setBuyerInfo(true);
		if (window.location.pathname === "/login") {
			window.history.back();
		}
	};

	const ContextValue = {
		cart,
		cartTotal,
		addToCart,
		removeFromCart,
		ClearCart,
		IsInCart,
		endPurchase,
		stockUpdate,
		buyerData,
		buyerInfo,
		bundleBuyID,
	};

	return <Provider value={ContextValue}>{children}</Provider>;
};

export default CustomProvider;

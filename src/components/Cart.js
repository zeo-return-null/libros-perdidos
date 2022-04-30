import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { PrimaryColor, DarkColor, SecondaryColor } from "../assets/ColorTheme";
import { Link } from "react-router-dom";
import  LoginForm  from "./LoginForm";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText } from "@mui/material";
import { Button } from "bootstrap";


const Cart = () => {
	const { cart, cartTotal, ClearCart, removeFromCart, buyerInfo, endPurchase, bundleBuyID  } = useContext(CartContext);

	const remove = (e) => {
		removeFromCart(e.target.id);
	};

	const clear = () => {
		ClearCart();
	};

	const endPurchaseHandler = () => {
		endPurchase();
	};

	const closeHandler = () => {
		setOpen(false);
		clear();
	}

	const [open, setOpen] = useState(false);


	useEffect(() => {
		if (bundleBuyID) {
			setOpen(true)
		}
	}, [bundleBuyID]);


	return (
		<CartContainer>
			<CartTitle>
				{cart.length > 0
					? `Su carrito posee ${cartTotal.qty} productos con un valor total de $ ${cartTotal.price}`
					: "Su carrito esta vacio"}
			</CartTitle>
			<CartItemContainer>
				{cart.map((product) => (
					<CartItem key={product.id}>
						<CartItemTitleAndQty>
							{" "}
							{product.name}: x {product.qty} ---{" "}
							<PriceStyle>
								$ {product.price * product.qty}{" "}
							</PriceStyle>
						</CartItemTitleAndQty>
						<CartItemButton id={product.id} onClick={remove}>
							Eliminar
						</CartItemButton>
					</CartItem>
				))}
				{cart.length > 0 ? (
					<ButtonContainer>
						<CartClearButton onClick={clear}>
							Vaciar carrito
						</CartClearButton>
						{!buyerInfo
						?  (
							<LoginForm />
							) 
						: (
							<EndPurchaseButton onClick={endPurchaseHandler}>Finalizar su compra</EndPurchaseButton>
							)}
					</ButtonContainer>
				) : (
						<BackToProductsButton to="/">
							Volver a los productos
						</BackToProductsButton>
				)}

				<Dialog
					open={open}
					onClose={closeHandler}
				>
					<DialogContent>
						<DialogContentText id="dialog-description">
							La compra {bundleBuyID} ha sido exitosa.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={closeHandler}>Aceptar</Button>
					</DialogActions>
				</Dialog>
			</CartItemContainer>
		</CartContainer>
	);
};

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CartTitle = styled.h3`
	text-align: center;
	font-size: 1.3rem;
	margin-bottom: 0;
`;

const CartItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	margin: 1rem;
	border: 1px solid black;
`;

const CartItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0.5rem;
	border: 1px solid black;
	width: 100%;
`;

const PriceStyle = styled.span`
	text-align: end;
`;

const CartItemTitleAndQty = styled.h3`
	text-align: center;
	font-size: 1.5rem;
	padding: 0 1rem 0.3rem 1rem;
	margin: 0;
	white-space: wrap;
`;

const CartClearButton = styled.button`
	font-size: 1rem;
	align-self:center;
	width: 10rem;
	height: 2.4rem;
	margin: 1rem;
	padding: 0 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const CartItemButton = styled.button`
	font-size: 1rem;
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding: 0 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const BackToProductsButton = styled(Link)`
	font-size: 1rem;
	text-decoration: none;
	text-align: center;
	color: black;
	width: auto;
	height: 2rem;
	margin: 1rem 0 1rem 0;
	padding: 0.5rem 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const EndPurchaseButton = styled.button`
	font-size: 1rem;
	width: auto;
	height: 2.4rem;
	margin: 1rem ;
	padding: 0 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;


const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	`


export default Cart;

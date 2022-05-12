import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import {
	PrimaryColor,
	DarkColor,
	SecondaryColor,
	LightColor,
} from "../assets/ColorTheme";
import { Link } from "react-router-dom";
import PurchaseForm from "./PurchaseForm";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText } from "@mui/material";

const Cart = () => {
	const {
		cart,
		cartTotal,
		ClearCart,
		removeFromCart,
		buyerInfo,
		endPurchase,
		bundleBuyID,
	} = useContext(CartContext);

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
	};

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (bundleBuyID) {
			setOpen(true);
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
							{product.name} x{product.qty} :{" "}
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
						{!buyerInfo ? (
							<PurchaseForm />
						) : (
							<EndPurchaseButton onClick={endPurchaseHandler}>
								Finalizar su compra
							</EndPurchaseButton>
						)}
					</ButtonContainer>
				) : (
					<BackToProductsButton to="/">
						Volver a los productos
					</BackToProductsButton>
				)}
				<Dialog open={open} onClose={closeHandler}>
					<DialogContent>
						<DialogContentText id="dialog-description">
							Su compra con el ID: {bundleBuyID} ha sido exitosa.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<DialogButton onClick={closeHandler}>
							Aceptar
						</DialogButton>
					</DialogActions>
				</Dialog>
			</CartItemContainer>
		</CartContainer>
	);
};

export default Cart;

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CartTitle = styled.h3`
	text-align: center;
	font-size: 1.3rem;
	margin-bottom: 0;
	@media screen and (max-width: 1200px) {
		font-size: 1.3rem;
	}
	@media screen and (max-width: 600px) {
		font-size: 1.2rem;
	}
	@media screen and (max-width: 450px) {
		font-size: 1.1rem;
	}
`;

const CartItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	margin: 1rem;
	box-shadow: rgba(0, 0, 0, 0.1) 2.4px 2.4px 3.2px;
	border-radius: 0.3rem;
	background-color: ${LightColor};
`;

const CartItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 1px;
	width: 100%;
`;

const PriceStyle = styled.span`
	text-align: end;
`;

const CartItemTitleAndQty = styled.p`
	text-align: center;
	font-size: 1.2rem;
	padding: 0 1rem 0.3rem 1rem;
	margin: 0;
	white-space: wrap;
	@media screen and (max-width: 1200px) {
		font-size: 1.2rem;
	}
	@media screen and (max-width: 600px) {
		font-size: 1.1rem;
	}
	@media screen and (max-width: 450px) {
		font-size: 0.8rem;
	}
`;

const CartClearButton = styled.button`
	font-size: 1rem;
	color: ${DarkColor};
	align-self: center;
	width: 10rem;
	height: 2.4rem;
	margin: 1rem;
	padding: 0 0.5rem 0 0.5rem;
	border: 0;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const CartItemButton = styled.button`
	font-size: 1rem;
	color: ${DarkColor};
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding: 0 0.5rem 0 0.5rem;
	border: 0;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
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
	color: ${DarkColor};
	width: auto;
	height: 2rem;
	margin: 1rem 0 1rem 0;
	padding: 0.5rem 0.5rem 0 0.5rem;
	border: 0;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const EndPurchaseButton = styled.button`
	font-size: 1rem;
	color: ${DarkColor};
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding: 0 0.5rem 0 0.5rem;
	border: 0;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
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
`;

const DialogButton = styled.button`
	font-size: 1rem;
	color: ${DarkColor};
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding: 0 0.5rem 0 0.5rem;
	border: 0;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

import styled from "styled-components";
import { ItemCount } from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
	PrimaryColor,
	SecondaryColor,
	LightColor,
	DarkColor,
} from "../assets/ColorTheme";
import { CartContext } from "./CartContext";

const ItemDetail = ({ product }) => {
	const [clicked, setClicked] = useState(false);

	const { addToCart } = useContext(CartContext);

	const onAdd = (count) => {
		addToCart(product, count);
		setClicked(true);
	};

	return (
		<ItemDetails>
			<ImageContainer>
				<Image src={product.url} alt={product.name} />
			</ImageContainer>
			<ItemTitle>{product.name}</ItemTitle>
			<ItemBookAuthor>{product.author}</ItemBookAuthor>
			<ItemDescription>{product.description}</ItemDescription>
			<ItemStock>Stock disponible: {product.stock} unidades.</ItemStock>
			<ItemPrice>$ {product.price}</ItemPrice>
			{clicked ? (
				<ButtonsContainer>
					<BuyDetailsButton to="/carrito">
						Ir al carrito
					</BuyDetailsButton>
					<ContinueShoppingButton to="/">
						Continuar comprando
					</ContinueShoppingButton>
				</ButtonsContainer>
			) : (
				<ItemCount initial={1} product={product} onAdd={onAdd} />
			)}
		</ItemDetails>
	);
};

export default ItemDetail;

const ItemDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1rem;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	background-color: ${LightColor};
	width: 80%;
`;
const ImageContainer = styled.div`
	width: 100%;
	height: 14rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	align-self: center;
	width: 10rem;
	height: 12rem;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	border-radius: 0.3rem;
`;

const ItemTitle = styled.h3`
	text-align: center;
	font-size: 1.3rem;
	margin-bottom: 0;
`;

const ItemBookAuthor = styled.h4`
	text-align: center;
	font-size: 1.2rem;
	margin: 0;
`;

const ItemDescription = styled.p`
	text-align: center;
	font-size: 1.1rem;
	padding: 0.25rem 1rem 0.25rem 1rem;
`;

const ItemPrice = styled.p`
	text-align: center;
	font-size: 1.1rem;
`;

const ItemStock = styled.p`
	text-align: center;
	font-size: 1.2rem;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const ButtonStyle = styled(Link)`
	align-self: center;
	text-decoration: none;
	text-align: center;
	font-size: 1rem;
	color: ${DarkColor};
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding: 0.5rem 0.5rem 0 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
		box-shadow: rgba(0, 0, 0, 0.5) 2.4px 2.4px 3.2px;
	}
`;

const BuyDetailsButton = styled(ButtonStyle)``;

const ContinueShoppingButton = styled(ButtonStyle)``;

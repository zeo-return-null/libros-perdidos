import styled from "styled-components";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PrimaryColor, SecondaryColor, DarkColor } from "../../../assets/ColorTheme";
import { CartContext } from "../Cart/CartContext/CartContext";

// src/components/Main/Cart/CartContext/CartContext.js
const ItemDetail = ({ product }) => {

	const [clicked, setClicked] = useState(false)

	const { addToCart } = useContext(CartContext);
	
	const onAdd = (count) => {

		addToCart(product, count);
		console.log(`Se agregaron ${count} productos al carrito`);
		// let CartItems = [count, id]
		setClicked(true)
		// console.log(`Agregar al carrito el producto ${product.name} x ${count} cantidad, del autor ${product.author}`);
		// console.log(CartItems);
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
			{clicked ? <BuyDetailsButton to="/carrito">Terminar compra</BuyDetailsButton> : <ItemCount initial={1} product={product} onAdd={onAdd} />}
		</ItemDetails>
	)
}

const ItemDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1rem;
	border: 1px solid black;
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
	align-self:center;
	width: 10rem;
	height: 12rem;
	border: 1px solid black;
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

const BuyDetailsButton = styled(Link)`
	align-self: center;
	text-decoration: none;
	text-align: center;
	font-size: 1rem;
	color: black;
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding:  0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

export default ItemDetail;


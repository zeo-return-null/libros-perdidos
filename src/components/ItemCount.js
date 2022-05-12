import styled from "styled-components";
import { useState } from "react";
import { SecondaryColor, PrimaryColor, DarkColor } from "../assets/ColorTheme";

const ItemCount = ({ initial, product, onAdd }) => {
	const [count, setCount] = useState(initial);

	const SumClick = () => {
		count < product.stock ? setCount(count + 1) : setCount(count);
	};

	const SubClick = () => {
		count > 0 ? setCount(count - 1) : setCount(0);
	};

	const onAddHandler = () => {
		onAdd(count);
	};

	return (
		<AddProductFunctionContainer>
			<ItemCountContainer>
				<ItemCountButton onClick={SubClick}>-</ItemCountButton>
				<ItemCountText>{count}</ItemCountText>
				<ItemCountButton onClick={SumClick}>+</ItemCountButton>
			</ItemCountContainer>
			<AddtoCartButton onClick={onAddHandler}>
				Añadir al carrito
			</AddtoCartButton>
		</AddProductFunctionContainer>
	);
};

export { ItemCount };

const AddProductFunctionContainer = styled.div`
	display: flex;
	margin: 1rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemCountContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ItemCountText = styled.p`
	font-size: 1rem;
	padding: 0.5rem;
	width: 2rem;
	text-align: center;
	color: ${DarkColor};
	margin: 0 0.5rem 1rem 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
`;

const ItemCountButton = styled.button`
	font-size: 1rem;
	color: ${DarkColor};
	width: 2rem;
	height: 2.4rem;
	margin: 0 0 1rem 0;
	padding: 0.5rem;
	border: 0;
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

const AddtoCartButton = styled.button`
	width: auto;
	text-align: center;
	font-size: 1rem;
	color: ${DarkColor};
	height: 2.4rem;
	margin: 1rem;
	padding: 0.5rem;
	border: 0;
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

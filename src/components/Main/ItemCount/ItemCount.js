import styled from "styled-components";
import { useState } from "react";
import { SecondaryColor,PrimaryColor,DarkColor } from "../../../assets/ColorTheme";

const ItemCount = ( { initial, stock, onAdd } ) => {


	const [count, setCount] = useState(initial);

	const SumClick = () => {
		count < stock ? setCount(count + 1) : setCount(count);
	};

	const SubClick = () => {
		count > 0 ? setCount(count - 1) : setCount(0);
	};

	const onAddHandler = () => {
		count > 0? onAdd() : console.log("No selecciono nada");
		setCount(0);
	}

	return (
		<AddProductFunctionContainer>
			<ItemCountContainer>
				<ItemCountButton onClick={SubClick}>-</ItemCountButton>
				<ItemCountText>{count}</ItemCountText>
				<ItemCountButton onClick={SumClick}>+</ItemCountButton>
			</ItemCountContainer>
			<AddtoCartButton onClick={onAddHandler}>Añadir al carrito</AddtoCartButton>
		</AddProductFunctionContainer>
	);
};

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
	margin: 0 0.5rem 1rem 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;
`;

const ItemCountButton = styled.button`
	font-size: 1rem;
	width: 2rem;
	height: 2.4rem;
	margin: 0 0 1rem 0;
	padding:  0 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const AddtoCartButton = styled.button`
	width: 8rem;
	height: 3rem;
	padding:  0 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

export { ItemCount };

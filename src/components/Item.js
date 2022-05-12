import styled from "styled-components";
import {
	LightColor,
	SecondaryColor,
	PrimaryColor,
	DarkColor,
} from "../assets/ColorTheme";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
	return (
		<ItemContainer>
			<ImageContainer>
				<Image src={product.url} alt={product.name} />
			</ImageContainer>
			<ItemTitle>{product.name}</ItemTitle>
			<ItemAuthor>{product.author}</ItemAuthor>
			<ItemDescription>${product.price}</ItemDescription>
			<ItemDetailsButton to={`/item/${product.id}`}>
				Quiero saber más
			</ItemDetailsButton>
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	width: 25%;
	height: auto;
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	background-color: ${LightColor};
	margin: 2;
	text-align: center;
	@media screen and (max-width: 1200px) {
		width: 25%;
	}
	@media screen and (max-width: 800px) {
		width: 40%;
	}
	@media screen and (max-width: 600px) {
		width: 70%;
	}
	@media screen and (max-width: 450px) {
		width: 80%;
	}
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
	border-radius: 6px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	width: 10rem;
	height: 12rem;
`;

const ItemTitle = styled.h3`
	text-align: center;
	font-size: 1.5rem;
	padding: 0 1rem 0.3rem 1rem;
	margin: 0;
	white-space: wrap;
`;

const ItemAuthor = styled.h4`
	text-align: center;
	font-size: 1.2rem;
	padding: 0 1rem 0.5 1rem;
	margin: 0;
`;

const ItemDescription = styled.p`
	text-align: center;
`;

const ItemDetailsButton = styled(Link)`
	text-align: center;
	text-decoration: none;
	font-size: 1rem;
	color: ${DarkColor};
	width: 8rem;
	height: 2.4rem;
	padding: 0.5rem;
	margin-bottom: 1rem;
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

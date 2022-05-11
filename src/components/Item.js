import styled from "styled-components";
import { GreyColor, DarkColor, SecondaryColor, PrimaryColor } from "../assets/ColorTheme";
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
		<ItemDetailsButton to={`/item/${product.id}`}>Quiero saber más</ItemDetailsButton>
	</ItemContainer>
	);
};

const ItemContainer = styled.div`
    width: 30%;
	height: auto;
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 1rem;
    flex-direction: column;
    ${'' /* justify-content: center; */}
	border: 1px solid;
    ${'' /* align-items: center; */}
	border-color: ${SecondaryColor};
	background-color: ${GreyColor};
    margin: 2;
    text-align: center;
    border-radius: 20;
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
	border: 1px solid ${DarkColor};
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
	color: black;
	align-self: flex-end;
	justify-content: flex-end;
	width: 8rem;
	height: 2.4rem;
	padding: 0.5rem;
	margin-bottom: 1rem;
	border: 1px solid #272d2dff;
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

import styled from "styled-components";
import { GreyColor, DarkColor, SecondaryColor } from "../../../assets/ColorTheme";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ product }) => {

	const initial = 1;

	const onAdd = () => {
		console.log(`Agregar al carrito el producto ${product.name}`);
	};

	return (
	<ItemContainer>
		<ImageContainer>
			<Image src={product.url} alt={product.name} />
		</ImageContainer>
		<ItemTitle>{product.name}</ItemTitle>
		<ItemAuthor>{product.author}</ItemAuthor>
		<ItemDescription>${product.price}</ItemDescription>
		<ItemCount initial={initial} stock={product.stock} onAdd={ onAdd } />
	</ItemContainer>
	);
};

const ItemContainer = styled.div`
    width: 30%;
	height: 42%;
	margin: 1rem;
	border-radius: 1rem;
    flex-direction: column;
    justify-content: center;
	border: 1px solid;
	border-color: ${SecondaryColor};
	background-color: ${GreyColor};
    align-items: center;
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

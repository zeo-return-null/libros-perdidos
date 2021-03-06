import styled from "styled-components";
import { ItemCount } from "./ItemCount";

const Details = ({ product }) => {
	const initial = 1;

	const onAdd = () => {};

	return (
		<>
			<ImageContainer>
				<Image src={product.url} alt={product.name} />
			</ImageContainer>
			<ItemTitle>{product.name}</ItemTitle>
			<ItemBookAuthor>{product.author}</ItemBookAuthor>
			<ItemDescription>{product.description}</ItemDescription>
			<ItemStock>Stock disponible: {product.stock} unidades.</ItemStock>
			<ItemPrice>$ {product.price}</ItemPrice>
			<ItemCount initial={initial} stock={product.stock} onAdd={onAdd} />
		</>
	);
};

export default Details;

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

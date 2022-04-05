import styled from "styled-components";


const Details = ( { initialDetails }) => {
	return (
		<>
			<ImageContainer>
				<Image src={initialDetails.url} alt={initialDetails.name} />
			</ImageContainer>
			<ItemTitle>{initialDetails.name}</ItemTitle>
			<ItemBookAuthor>{initialDetails.author}</ItemBookAuthor>
			<ItemDescription>{initialDetails.description}</ItemDescription>
			<ItemStock>Stock disponible: {initialDetails.stock} unidades.</ItemStock>
			<ItemPrice>$ {initialDetails.price}</ItemPrice>
		</>
	)
}


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

export default Details;
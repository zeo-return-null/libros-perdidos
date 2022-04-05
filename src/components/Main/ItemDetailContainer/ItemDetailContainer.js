import styled from "styled-components";
import ItemDetail from "../ItemDetail/ItemDetail";
import { initialProduct } from "../../../assets/InitialProductDetails";
import { useEffect, useState } from "react";


const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(initialProduct);
	},2000);
});


const ItemDetailContainer = () => {

	const [initialProduct, setDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		promise
		.then((initialProduct) => {setDetails(initialProduct)})
		.catch((error) => {console.log(error)})
		.finally(() => {setLoading(false)})
	}, []);


	return (
		<ItemContainer>
			{loading ? (
				<DescriptionMessage>
					Aguarde un momento
				</DescriptionMessage>
			): (
			<ItemDetail initialProduct = {initialProduct} />
			)}
		</ItemContainer>
	)
}


const ItemContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

`;

const DescriptionMessage = styled.p`
`;

export default ItemDetailContainer;
import styled from "styled-components";
import ItemDetail from "../components/ItemDetail";
import { products } from "../assets/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(products);
	},2000);
});


const ItemDetailContainer = () => {

	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id }  = useParams();

	useEffect(() => {
		promise	
		.then((products) => {
			setProduct(products.filter(product => product.id === parseInt(id))[0]);
		})
		.catch((error) => {console.log(error)})
		.finally(() => {setLoading(false)})
	}, [id]);



	return (
		<ItemContainer>
			{loading ? (
				<DescriptionMessage>
					Aguarde un momento
				</DescriptionMessage>
			): (
			<ItemDetail product = {product} />
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
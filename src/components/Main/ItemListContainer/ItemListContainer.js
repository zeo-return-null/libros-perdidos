import styled from "styled-components";
import { products } from "../../../assets/Products";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ItemList from "../ItemList/ItemList";

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(products);
	},2000);
});


const ItemListContainer = ({ user } ) => {

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		promise
		.then((products) => {setProducts(products)})
		.catch((error) => {console.log(error)})
		.finally(() => {setLoading(false)})
	}, []);


	return (
		<ItemListDiv>
			<WelcomeMessage>
				Bienvenido {user} a la tienda de Libros Perdidos
			</WelcomeMessage>
			{loading ? ( 
				<>
					<DescriptionMessage>
					¡La libreria donde encontrarás aquellos libros que no sabias que
					buscabas!
					</DescriptionMessage>
					<LoadingContainer> 
						<ClipLoader loading={loading} size={150} ></ClipLoader>
						<LoadingMessage>Aguarde un momento por favor</LoadingMessage>
					</LoadingContainer>
				</>
			) : ( 
				<ItemList products={ products }/>
				)}
		</ItemListDiv>
	);
};

export default ItemListContainer;

const ItemListDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: top;
	margin: 1rem;
	height: 80%;
	padding: 0.5rem;
`;

const WelcomeMessage = styled.h1`
	text-align: center;
`;

const DescriptionMessage = styled.p`
	text-align: center;
`;

const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 3rem;
`;

const LoadingMessage = styled.p`
	text-align: center;
	font-size: 2rem;
`;
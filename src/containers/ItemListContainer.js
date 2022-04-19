import styled from "styled-components";
import { products } from "../assets/Products";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";


const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(products);
	},1000);
});


const ItemListContainer = () => {

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);


	const { category }  = useParams();

	useEffect(() => {
		promise
			.then((products) => {
				if (category) {
					setProducts(products.filter(product => product.category === category));
				}
				else {
					setProducts(products);
				}
			})
			.catch((error) => {console.log(error)})
			.finally(() => {setLoading(false)})
	}, [category]);

	return (
		<ItemListDiv>
			{loading ? ( 
				<>
					<WelcomeMessage>
						Bienvenido a la tienda de Libros Perdidos
					</WelcomeMessage>
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
				<>
				<WelcomeMessage>Nuestros productos</WelcomeMessage>
				<ItemList products={ products }/>
				</>)}
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
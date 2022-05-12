import styled from "styled-components";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [welcomeMessage, setWelcomeMessage] = useState();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { category } = useParams();

	useEffect(() => {
		const productCollection = collection(db, "libros");
		let request;
		if (category) {
			request = query(
				productCollection,
				where("category", "==", category)
			);
			setWelcomeMessage(
				category.charAt(0).toUpperCase() + category.slice(1)
			);
		} else {
			request = productCollection;
			setWelcomeMessage("Bienvenido a la tienda de Libros Perdidos");
		}

		getDocs(request)
			.then((result) => {
				const docs = result.docs;
				const products = docs.map((products) => {
					const id = products.id;
					const product = {
						id,
						...products.data(),
					};
					return product;
				});
				setProducts(products);
				setLoading(false);
			})
			.catch(() => {
				console.error(
					"¡Oh no! Algo malió sal, quiero decir, ¡algo salio mal!"
				);
			});
	}, [category]);

	return (
		<ItemListDiv>
			{loading ? (
				<>
					<WelcomeMessage>{welcomeMessage}</WelcomeMessage>
					<DescriptionMessage>
						¡La libreria donde encontrarás aquellos libros que no
						sabias que buscabas!
					</DescriptionMessage>
					<LoadingContainer>
						<ClipLoader loading={loading} size={150}></ClipLoader>
						<LoadingMessage>
							Aguarde un momento por favor
						</LoadingMessage>
					</LoadingContainer>
				</>
			) : (
				<>
					<WelcomeMessage>{welcomeMessage}</WelcomeMessage>
					<ItemList products={products} />
				</>
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

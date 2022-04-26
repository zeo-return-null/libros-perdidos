import styled from "styled-components";
import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {

		const libros = doc(db, "libros", id);
		
		getDoc(libros)
			.then((snapshot) => {
				let requestedProduct = { id: snapshot.id, ...snapshot.data()}
				setProduct(requestedProduct);
				setLoading(false);
			})
			.catch(() => {
				console.log("Oh no! Algo malió sal, quiero decir, ¡algo salio mal!");
			});
	}, [id]);

	return (
		<ItemContainer>
			{loading ? (
				<DescriptionMessage>Aguarde un momento</DescriptionMessage>
			) : (
				<ItemDetail key={ product.id } product={ product } />
			)}
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const DescriptionMessage = styled.p``;

export default ItemDetailContainer;

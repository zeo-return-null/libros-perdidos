import styled from "styled-components";
import { ItemCount } from "../ItemCount/ItemCount";


const ItemListContainer = ({ user } ) => {

	const onAdd = () => {
		console.log("Agregar al carrito");
		// return count > 0 ? console.log("Agregar al carrito") : console.log("No selecciono nada");
	};

	return (
		<ItemList>
			<WelcomeMessage>
				Bienvenido {user} a la tienda de Libros Perdidos
			</WelcomeMessage>
			<DescriptionMessage>
				¡La libreria donde encontrarás aquellos libros que no sabias que
				buscabas!
			</DescriptionMessage>
			<ItemCount initial={1} stock={10} onAdd={ onAdd } />
		</ItemList>
	);
};

export default ItemListContainer;

const ItemList = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: top;
	margin: 1rem;
	height: 80vh;
	padding: 0.5rem;
`;

const WelcomeMessage = styled.h1`
	text-align: center;
`;

const DescriptionMessage = styled.p`
	text-align: center;
`;
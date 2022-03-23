import styled from 'styled-components';

const ItemListContainer = ({ user }) => {

	return (
		<ItemList>
			<WelcomeMessage>Bienvenido { user } a la tienda de Libros Perdidos</WelcomeMessage>
			<DescriptionMessage>¡La libreria donde encontrarás aquellos libros que no sabias que buscabas!</DescriptionMessage>
		</ItemList>
	)
}

export default ItemListContainer; 

const ItemList = styled.div`

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: top;
	margin: 1rem;
	height: 80vh;
	padding: 0.5rem;
`

const WelcomeMessage = styled.h1`
	text-align: center;
`

const DescriptionMessage = styled.p`
	text-align: center;
`
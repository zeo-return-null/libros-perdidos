import styled from "styled-components";
import { Item } from "./Item";

const ItemList = ({ products }) => {
	return (
		<ItemListDiv>
			{products.map((product) => (
				<Item key={product.id} product={product} />
			))}
		</ItemListDiv>
	);
};

export default ItemList;

const ItemListDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;

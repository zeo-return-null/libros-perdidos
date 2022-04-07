import styled from "styled-components";
import Details from './Details/Details';


const ItemDetail = ({ product }) => {

	
	return (
		<ItemDetails>	
				<Details product={product}/>
		</ItemDetails>
	)
}

const ItemDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1rem;
	border: 1px solid black;
	width: 80%;
`;


export default ItemDetail;


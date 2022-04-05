import styled from "styled-components";
import Details from './Details/Details';


const ItemDetail = ({ initialProduct }) => {

	
	return (
		<ItemDetails>
			{initialProduct.map((initialDetails) => (
				<Details key={initialDetails.id} initialDetails={initialDetails}/>
			))}
			
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


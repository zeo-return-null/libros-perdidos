import styled from "styled-components";
import { GreyColor, DarkColor, SecondaryColor } from "../../../assets/ColorTheme";
import { Link } from "react-router-dom";


export const Item = ({ product }) => {

	return (
	<ItemContainer>
		<ImageContainer>
			<Image src={product.url} alt={product.name} />
		</ImageContainer>
		<ItemTitle>{product.name}</ItemTitle>
		<ItemAuthor>{product.author}</ItemAuthor>
		<ItemDescription>${product.price}</ItemDescription>
		<Link to={`/item/${product.id}`} style={ItemDetailsButton}>Quiero saber más</Link>
	</ItemContainer>
	);
};

const ItemContainer = styled.div`
    width: 30%;
	height: 42%;
	margin: 1rem;
	padding: 1rem;
	border-radius: 1rem;
    flex-direction: column;
    justify-content: center;
	border: 1px solid;
	border-color: ${SecondaryColor};
	background-color: ${GreyColor};
    align-items: center;
    margin: 2;
    text-align: center;
    border-radius: 20;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 14rem;
	display: flex;
	justify-content: center;
	align-items: center;

`;

const Image = styled.img`
	align-self:center;
	border: 1px solid ${DarkColor};
	width: 10rem;
	height: 12rem;
`;

const ItemTitle = styled.h3`
	text-align: center;
	font-size: 1.5rem;
	padding: 0 1rem 0.3rem 1rem;
	margin: 0;
	white-space: wrap;

`;

const ItemAuthor = styled.h4`
	text-align: center;
	font-size: 1.2rem;
	padding: 0 1rem 0.5 1rem;
	margin: 0;
`;


const ItemDescription = styled.p`
	text-align: center;
`;

const ItemDetailsButton = {
	textDecoration: "none",
	color: "black",
	width: "8rem",
	height: "2rem",
	padding:  "0.25rem 0.5rem 0.25rem 0.5rem",
	marginBottom: "1rem",
	border: "1px solid #272d2dff",
	borderRadius: "0.3rem",
	backgroundColor: "#F58549",
	transition: "ease-in-out 150ms"

	// :hover {
	// 	background-color: ${SecondaryColor};
	// 	transition: ease-in-out 150ms;
	// }
}
;
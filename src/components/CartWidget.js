import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
	const { cartTotal } = useContext(CartContext);

	return (
		<CartWidgetButton to="/carrito" className="Button">
			<CartIcon fontSize="20px" />
			{cartTotal.qty > 0 && <Quantity>{cartTotal.qty}</Quantity> }
		</CartWidgetButton>
	);
};
export default CartWidget;

const CartWidgetButton = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Quantity = styled.p`
	padding: 0;
	margin: 0;
`;

const CartIcon = styled(ShoppingCartIcon)`
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`;

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	const CartQuantity =" ";
	
	return (
			<Link to="/cart" className="Button">
					<ShoppingCartIcon fontSize='20px'/>
					<Quantity> {CartQuantity}</Quantity>
			</Link>
	)
}
export default CartWidget;

const Quantity = styled.p`
		display: inline;
`

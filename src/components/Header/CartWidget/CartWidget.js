import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';


const CartWidget = () => {
	const CartQuantity = '';
	
	return (
		<>
			<CartWidgetContainer  href='.' className="Button">
				<ShoppingCartIcon className="Icon" fontSize='20px'/>
				<p className="Quantity">{CartQuantity}</p>
			</CartWidgetContainer>
		</>
	)
}
export default CartWidget;

const CartWidgetContainer = styled.a`
	
	.Icon{
		display: inline;
		position: relative;
		top:2px;
	}

	.Quantity {
		display: inline;
	}
`

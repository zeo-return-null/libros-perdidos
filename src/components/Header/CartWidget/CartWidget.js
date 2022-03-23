import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';


const CartWidget = () => {
	return (
		<>
			<CartWidgetContainer  href='.' className="Button">
				<ShoppingCartIcon fontSize='20px'/>
			</CartWidgetContainer>
		</>
	)
}
export default CartWidget;

const CartWidgetContainer = styled.a`

`

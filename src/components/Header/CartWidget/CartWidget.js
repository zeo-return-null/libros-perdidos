import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';


const CartWidget = () => {
	return (
		<>
			<CartWidgetContainer href='.'>
				<ShoppingCartIcon fontSize="small"/>
			</CartWidgetContainer>
		</>
	)
}
export default CartWidget;

const CartWidgetContainer = styled.a`
	margin: 0 0.90rem 0.75rem 0.10rem;
	padding: 0.5rem 1rem 0.5rem 1rem;
	border: none;
	text-decoration: none;
	text-align: center;
	border-radius: 1rem;
	transition: ease-in-out 150ms;
	opacity: 1;
	color: #282c34;
	background-color: #B7CADB;
	`

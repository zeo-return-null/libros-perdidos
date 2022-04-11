import styled from "styled-components";

const Cart = () => {
	  return (
		  <CartContainer>
			  <CartTitle>Carrito en construcción</CartTitle>
		  </CartContainer>
	  )
}

const CartContainer = styled.div `
	display: flex;
	flex-direction: column;
`

const CartTitle = styled.h3 `
	text-align: center;
	font-size: 1.3rem;
	margin-bottom: 0;
`

export default Cart;
import { useContext} from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CartForm = () => {

	const { userData } = useContext(CartContext)

	return (
		<FormContainer>
			<Formik>
				initialValues={{
					name: "",
					mail: "",
					direction: "",
					phone: "",
				}}
				validate={(values) => {
					const errors = {};

					if (!values.name) {
						errors.name = 'Required';
					}

					if (!values.mail) {
						errors.mail = 'Required';
					}

					if (!values.direction) {
						errors.direction = 'Required';
					}

					if (!values.phone) {
						errors.phone = 'Required';
					}

					return errors;
				}}
				onSubmit={(values, {resetForm}) => {
					userData(values)

				}}
				
			</Formik>
		</FormContainer>

	)
}


const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export default CartForm;

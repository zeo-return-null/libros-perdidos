import { useContext} from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CartForm = () => {

	const { userData } = useContext(CartContext)

	return (
		<FormContainer>
			<Formik
				initialValues={{
					name: "",
					mail: "",
					direction: "",
					phone: "",
				}}
				validate={(values) => {
					const errors = {};

					if (!values.name) {
						errors.name = 'Requerido';
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,60}$/.test(values.name)) {
						errors.name = 'El nombre no es valido';
					}

					if (!values.mail) {
						errors.mail = 'Requerido';
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)) {
						errors.mail = 'Ingrese una dirección de email valida';
					}

					if (!values.direction) {
						errors.direction = 'Requerido';
					} else if (/^[a-zA-ZÀ-ÿ\s]{1,80}$/.test(values.direction)) {
						errors.direction = 'La dirección no es valida';
					}

					if (!values.phone) {
						errors.phone = 'Requerido';
					} else if (/^[09][0-9]{1,7}$/.test(values.phone)) {
						errors.phone = 'Debe ingresar un numero telefonico valido'
					}


					return errors;
				}}
				onSubmit={(values, {resetForm}) => {
					userData(values)

				}}
			>

				{( {errors} ) => (
					<Form>
						<FieldContainer>
							<label htmlFor="nombre">Nombre</label>
								<Field
									type="text" 
									id="name" 
									name="name" 
									placeholder="Juan Perez"
								/>
							<Error name="name" component={() => (<div>{errors.name}</div>)} />
						</FieldContainer>
					</Form>
				)}
			</Formik>
		</FormContainer>

	)
}


const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 10rem;
	height: 3rem;
	justify-content: center;
	align-items: center;
`

const Error = styled(ErrorMessage)`
	color: red;
`

export default CartForm;

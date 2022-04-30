import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DarkColor, PrimaryColor, SecondaryColor } from "../assets/ColorTheme";


const LoginForm = () => {

	const { buyerData } = useContext(CartContext)

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
					buyerData(values)
					}}
				>
				
				{( {errors} ) => (
					<StyledForm>
						<FieldContainer>
							<label htmlFor="name">Nombre</label>
								<StyledField
									type="text" 
									id="name" 
									name="name" 
									placeholder="Pepe Perez"
								/>
							<Error name="name" component={() => (<div>{errors.name}</div>)} />
						</FieldContainer>
						<FieldContainer>
							<label htmlFor="direction">Direccion</label>
								<StyledField
									type="text" 
									id="direction" 
									name="direction" 
									placeholder="Calle falsa 123"
								/>
							<Error name="direction" component={() => (<div>{errors.direction}</div>)} />
						</FieldContainer>
						<FieldContainer>
							<label htmlFor="mail">Correo electronico</label>
								<StyledField
									type="text" 
									id="mail" 
									name="mail" 
									placeholder="correo@electronico.com"
								/>
							<Error name="mail" component={() => (<div>{errors.mail}</div>)} />
						</FieldContainer>
						<FieldContainer>
							<label htmlFor="phone">Numero telefonico</label>
								<StyledField
									type="text" 
									id="phone" 
									name="phone" 
									placeholder="5678123"
								/>
							<Error name="phone" component={() => (<div>{errors.phone}</div>)} />
						</FieldContainer>
						<FinalizeButton type="submit" >Continuar </FinalizeButton>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>

	)
}


const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledForm = styled(Form)`
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
`;


const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	pading: 1.2rem;
	width: 25rem;
	height: 3rem;
	justify-content: center;
	align-items: center;
`;

const StyledField =styled(Field)`
	width: 14rem;
	border-radius: 0.3rem;
	padding: 0.5rem;
`

const FinalizeButton = styled.button`
	align-self: center;
	text-decoration: none;
	text-align: center;
	font-size: 1rem;
	color: black;
	width: auto;
	height: 2.4rem;
	margin: 1rem;
	padding:  0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`;

const Error = styled(ErrorMessage)`
	height:1rem;
	padding: 1rem;
`

export default LoginForm;

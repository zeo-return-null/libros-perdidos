import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { PrimaryColor, DarkColor, SecondaryColor } from "../assets/ColorTheme";


export const StyledButton = styled(Link)`
	font-size: 1rem;
	text-decoration: none;
	text-align: center;
	color: black;
	width: auto;
	height: 2rem;
	margin: 1rem 0 1rem 0;
	padding: 0.5rem 0.5rem 0 0.5rem;
	border: 1px solid ${DarkColor};
	border-radius: 0.3rem;
	background-color: ${PrimaryColor};
	transition: ease-in-out 150ms;

	:hover {
		background-color: ${SecondaryColor};
		transition: ease-in-out 150ms;
	}
`
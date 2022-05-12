import styled from "styled-components";
import logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import { DarkColor, GreyColor } from "../assets/ColorTheme";
import { Link } from "react-router-dom";

const Header = ({ links }) => {
	return (
		<Navbar>
			<Link to="/">
				<Logo
					src={logo}
					className="Logo"
					alt="logo de libros perdidos"
				/>
			</Link>
			<h3 className="Title">Libros Perdidos</h3>
			<Nav links={links} />
		</Navbar>
	);
};

export default Header;

const Logo = styled.img`
	height: 4.5rem;
	width: 4.5rem;
	padding: 0.5rem;
`;

const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${GreyColor};
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

	.Title {
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		white-space: pre-wrap;
		margin: 0 0.75rem 0 0.5rem;
		align-self: center;
		color: ${DarkColor};
		transform: translateX(40%);
		@media screen and (max-width: 800px) {
			transform: translateX(-5%);
		}
		@media screen and (max-width: 600px) {
			display: none;
		}
	}
`;

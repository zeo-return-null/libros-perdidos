import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';
import Nav from './Nav/Nav';
import { TernaryColor, DarkColor } from '../../assets/ColorTheme';

const Header = ({ links }) => {
	return (
		<Navbar>
			<Logo href='.'>
				<img src={ logo } className="Logo" alt="logo de libros perdidos"/>
			</Logo>
			<h3 className="Title">Libros Perdidos</h3>
			<Nav links = { links }/>
		</Navbar>
	);
}

export default Header;

const Logo = styled.a`
	.Logo {
		height: 4.65rem;
		width: 4.65rem;
	}
`

const Navbar = styled.div`

	display: flex;
	flex-direction: row;
	justify-content: space-between;	
	background-color: ${DarkColor};

	.Title {
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		white-space: pre-wrap;
		margin: 0 0.75rem 0 0.5rem ;
		align-self: center;
		color: ${TernaryColor};
	}
`
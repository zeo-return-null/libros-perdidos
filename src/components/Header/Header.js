import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';
import Nav from './Nav/Nav';


const Header = () => {
	return (
		<NavbarContainer>
			<img src={logo} className="Logo" alt="logo de libros perdidos"/>
			<h3 className="Title">Libros Perdidos</h3>
			<Nav/>
		</NavbarContainer>
	);
}

export default Header;

const NavbarContainer = styled.div`

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #F3E9DD;

	.Logo {
		height: 4.65rem;
		width: 4.65rem;
	}

	.Title {
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		white-space: pre-wrap;
		margin: 0 0.75rem 0 0.5rem ;
		align-self: center;
	}
`
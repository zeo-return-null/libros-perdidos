import styled from 'styled-components';
import CartWidget from '../CartWidget/CartWidget';

const Nav =(props) => {
	return (
		<NavContainer>
			<ul className="LinkList">
				<li><a href="." className="Button">Inicio</a></li>
				<li><a href="." className="Button">Categorias</a>
					<ul className="Categories">
						<li className="CategoryItem">
							<a href="." className="Button">Categoria 1</a>
						</li>
						<li className="CategoryItem">
							<a href="." className="Button">Categoria 2</a>
						</li>
						<li className="CategoryItem">
							<a href="." className="Button">Categoria 3</a>
						</li>
						<li className="CategoryItem">
							<a href="." className="Button">Categoria 4</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="." className="Button">Login</a>
				</li>
				<li>
					<CartWidget/>
				</li>
			</ul>
		</NavContainer>
	)
}

export default Nav;

const NavContainer = styled.nav`

		margin-top: 1rem;

	.LinkList {
		list-style: none;
		position: relative;
		float: left;
		margin: 0;
		padding: 0;
		font-size: 1rem;
	}

	.LinkList a {
		display: block;
		text-decoration: none;
		padding: 0.60rem;
	}

	.LinkList li {
		position:relative;
		float:left;
		margin: 0;
		padding: 0;
	}

	.Categories {
		display:none;
		position: absolute;
		top: 100%;
		left: 0;
		padding: 0;
	}

	.CategoryItem{
		float: none;
		margin: 1rem;
	}

	.LinkList ul a {
		line-height: 120%;
	}

	.LinkList li:hover > ul { 
		display: block;
	}

	ul {
		list-style-type: none;
		padding-inline-start: 0;
	}

	li {
		margin: 0rem;
		white-space: nowrap;
	}

	.Button {
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
	}

	.Button:hover {
			transition: ease-in-out 150ms;
			opacity: 0.7;
	}
`


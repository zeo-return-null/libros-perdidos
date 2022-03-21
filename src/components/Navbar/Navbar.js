import './Navbar.css';
import logo from '../../assets/img/logo.svg';

function Navbar() {
	return (
		<div className='Navbar'>
			<img src={logo} className="Logo" alt="logo de libros perdidos"/>
			<h3 className="Title">Bienvenido a la tienda de Libros Perdidos</h3>
			<nav className="Nav">
				<ul className="LinkList">
					<li><a href="." className="Button">Inicio</a></li>
					<li><a href="." className="Button">Categorias</a>
						<ul className="Categories">
							<li className="CategoryItem">
								<a href="#" className="Button">Categoria 1</a>
								</li>
							<li className="CategoryItem">
								<a href="#" className="Button">Categoria 2</a>
								</li>
							<li className="CategoryItem">
								<a href="#" className="Button">Categoria 3</a>
								</li>
							<li className="CategoryItem">
								<a href="#" className="Button">Categoria 4</a>
								</li>
						</ul>
					</li>
					<li>
						<a href="#" className="Button">Login</a>
						</li>
					<li>
						<a href="#" className="Button">Carrito</a>
						</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
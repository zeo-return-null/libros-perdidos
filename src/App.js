import Header from "./components/Header";
import Main from "./components/Main";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm"
import CustomProvider from "./components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

	const links = [
		{ id: 1, route: "categorias/ficción", name: "Libros de Ciencia Ficción" },
		{ id: 2, route: "categorias/terror", name: "Libros de Terror" },
		{ id: 3, route: "categorias/fantasia", name: "Libros de Fantasia" },
	];

	return (
		<BrowserRouter>
			<CustomProvider>
				<Header links={links} />
				<Main>
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/categorias/:category" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/login" element={<LoginForm />} /> 
						<Route path="/carrito" element={<Cart />} />
					</Routes>
				</Main>
			</CustomProvider>
		</BrowserRouter>
	);
};

export default App;
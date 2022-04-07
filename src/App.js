import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

	const links = [
		{ id: 1, route: "categorias/ficcion", name: "Libros de Ficción" },
		{ id: 2, route: "categorias/terror", name: "Libros de Terror" },
		{ id: 3, route: "categorias/articulos-libreria", name: "Productos de Libreria" },
	];

	return (
		<BrowserRouter>
			<>
				<Header links={links} />
				<Main>
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/categorias/:category" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/carrito" />
					</Routes>
				</Main>
			</>
		</BrowserRouter>
	);
};

export default App;
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";

const App = () => {
	const user = "Juan";
	const links = [
		{ id: 1, tag: "#", link: "Libros de Ficción" },
		{ id: 2, tag: "#", link: "Libros de Ciencia" },
		{ id: 3, tag: "#", link: "Libros de Terror" },
		{ id: 4, tag: "#", link: "Libros de Fantasia" },
		{ id: 5, tag: "#", link: "Productos de Libreria" },
		{ id: 6, tag: "#", link: "Mangas Japoneses" }
	];

	const onAdd = () => {
		console.log("Agregar al carrito");
		// return count > 0 ? console.log("Agregar al carrito") : console.log("No selecciono nada");
	};

	return (
		<>
			<Header links={links} />
			<Main>
				<ItemListContainer user={user} onAdd={ onAdd } />
			</Main>
		</>
	);
};

export default App;
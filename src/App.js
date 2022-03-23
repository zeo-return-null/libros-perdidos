import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

	const user = "Juan";
	const links =[{id:1, tag:"#", link:"Libros de Ficción"},{id:2, tag:"#", link:"Libros de Ciencia"},{id:3, tag:"#", link:"Libros de Terror"},{id:4, tag:"#", link:"Libros de Fantasia"}, {id:5, tag:"#", link:"Productos de Libreria"}, {id:6, tag:"#", link:"Mangas Japoneses"}]

	return ( 
		<>
			<Header links = { links }/>
			<Main>
				<ItemListContainer user = { user }/>
			</Main>
		</>
	);
}


export default App;
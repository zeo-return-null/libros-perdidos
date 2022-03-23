import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

	const user = "Juan";

	return ( 
		<>
			<Header/>
			<Main>
				<ItemListContainer user = {user}/>
			</Main>
		</>
	);
}


export default App;
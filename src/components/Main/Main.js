import styled from 'styled-components';

const Main = (props) => {
	return (
		<MainContainer>
			{props.children}
		</MainContainer>
	)
}

const MainContainer = styled.div`
	display:flex;
	flex-direction:column
`

export default Main;
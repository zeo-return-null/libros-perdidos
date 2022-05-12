import styled from "styled-components";

const Main = (props) => {
	return <MainContainer>{props.children}</MainContainer>;
};

export default Main;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

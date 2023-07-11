import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Dummy from "./pages/Dummy";
import Footer from "./components/Footer";
import { styled } from "styled-components";

function App() {
	return (
		<AppContainer aria-label="App Container">
			<Navigation />
			<Content>
				<Dummy />
			</Content>
			<Footer />
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { styled } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassicalPage from "./pages/Classical";

function App() {
	return (
		<AppContainer aria-label="App Container">
			<BrowserRouter>
				<Navigation />
				<Content>
					<Routes>
						<Route path="/classical" element={<ClassicalPage />} />
					</Routes>
				</Content>
			</BrowserRouter>
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

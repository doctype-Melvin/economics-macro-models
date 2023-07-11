import "./App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Dummy from "./pages/Dummy";

function App() {
	return (
		<>
			<Navigation />
			<Content>
				<Dummy />
			</Content>
		</>
	);
}

export default App;

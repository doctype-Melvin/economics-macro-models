import "./App.css";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Dummy from "./pages/Dummy";
import Footer from "./components/Footer";

function App() {
	return (
		<section aria-label="Page Content" className="app">
			<Navigation />
			<Content>
				<Dummy />
			</Content>
			<Footer />
		</section>
	);
}

export default App;

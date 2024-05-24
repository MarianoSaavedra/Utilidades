import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Acordion from "./components/Acordion";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="col-12 contenedor">
			<Header />
			<Acordion />
			<Footer />
		</div>
	);
}

export default App;

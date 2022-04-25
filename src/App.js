import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import {useEffect, useState} from "react";
import Kit from "./containers/Kit/Kit";
import samples from "./data/samples";

function App() {
	const [sounds, setSounds] = useState([]);
  
	useEffect(() => {
		setSounds(samples);
	}, []);

	return (
		<div className={styles.App}>
			<Navbar />
			<Kit sounds={sounds} />
		</div>
	);
}

export default App;

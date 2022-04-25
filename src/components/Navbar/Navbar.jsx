import {Link} from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<div className={styles.Navbar__Container}>
				<img className={styles.Navbar__Container__Logo}
					src={require("./../../assets/images/stereolust-logo.png")}
					alt="Stereolust Logo"
				/>
				<div className={styles.Navbar__Container__Links}>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

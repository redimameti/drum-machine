import {useEffect, useState} from "react";
import styles from "./Drum.module.scss";

const Drum = ({sound}) => {
	const audio = new Audio(sound.sound);
	const [playing, setPlaying] = useState(false);

	const play = () => {
		audio.currentTime = 0;
		audio.play();
		setPlaying(true);
		setTimeout(() => {
			setPlaying(false);
		}, 150);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === sound.button.toLowerCase()) {
				play();
			}
		});
	}, []);
	return (
		<div className={styles.Drum}>
			<span className={styles.Drum__Container}>
				<button
					className={
						playing
							? `${styles.Drum__Container__Button} ${styles.Drum__Container__Button__Playing}`
							: styles.Drum__Container__Button
					}
					onClick={play}>
					{sound.button}
				</button>
				<span className={styles.Drum__Container__Name}>
					{sound.name}
				</span>
			</span>
		</div>
	);
};

export default Drum;

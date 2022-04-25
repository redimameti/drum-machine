import {useEffect} from "react";
import Drum from "../../components/Drum/Drum.jsx";
import styles from "./Kit.module.scss";

const Kit = ({sounds}) => {

	return (
		<div className={styles.Kit}>
      <div className={styles.Kit__Container}>
      {sounds.map((sound,index) => {
        return <Drum 
                  key={index} 
                  sound={sound}  
                />
      })}
      </div>
		</div>
	);
};

export default Kit;

import { FaPaperPlane } from "react-icons/fa";
import styles from "./animation.module.css"


export default function Index() {
    return <div className="mt-5">
    
        <h6 className="text-muted text-center">
            <FaPaperPlane className={styles.iconAnimation} size={35} /> Escoge una especialidad que te interese para ver información!
        </h6>

    </div>
}
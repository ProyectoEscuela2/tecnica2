import { MdDownload as Md } from 'react-icons/md';
import styles from './descripcion.module.css';

export default function DescripcionComponent({ videoURL, acercaDeEspecialidad, diseñoCurricularSRC }) {
    return <>
    
        <div className={`${styles.descripcion} my-5`}>

            <div className={`${styles.videoContainer} mb-5`}>
                <iframe src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className={styles.infoContainer}>
                {acercaDeEspecialidad.map(pgh => <p>{pgh}</p>)}
            </div>

            <button className="btn btn-primary">
                {/* Crear función para descargar el archivo */}
                {/* function(diseñoCurricularSRC) */}
                <Md size={22} /> Diseño curricular
            </button>
        </div>

    </>
}
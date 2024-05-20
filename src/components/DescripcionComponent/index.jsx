import styles from './descripcion.module.css';

export default function DescripcionComponent({ videoURL, acercaDeEspecialidad, diseñoCurricularSRC }) {
    return <>
    
        <div className={styles.descripcion}>

            <div className={styles.videoContainer}>
                <iframe width="800" height="400" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className={styles.infoContainer}>
                {acercaDeEspecialidad.map(pgh => <p>{pgh}</p>)}
            </div>

            <button>
                {/* Crear función para descargar el archivo */}
                {/* function(diseñoCurricularSRC) */}
                (Icono download) Diseño curricular
            </button>
        </div>

    </>
}
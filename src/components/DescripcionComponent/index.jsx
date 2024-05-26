import { MdDownload as Md } from 'react-icons/md';
import styles from './descripcion.module.css';
import { BotonConIcono } from '../botones/boton1' 
import { useState } from 'react';

export default function DescripcionComponent({ videoURL, acercaDeEspecialidad, diseñoCurricularSRC,titulo }) {
    return <>
    
        <div className={`${styles.descripcion}`}>
            <div className={styles.infoContainer}>
                <h2 className={styles.infoTitle}>{titulo}</h2>
                {acercaDeEspecialidad.map(pgh => <p className={styles.infoText}>{pgh}</p>)}
                <BotonConIcono className={`${styles.infoButton}`} text="Diseño curricular" accion="">
                {/* Crear función para descargar el archivo */}
                {/* function(diseñoCurricularSRC) */}
                <Md size={22} />
                </BotonConIcono>
            </div>
            <div className={`${styles.videoContainer}`}>
                <iframe src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </>
}
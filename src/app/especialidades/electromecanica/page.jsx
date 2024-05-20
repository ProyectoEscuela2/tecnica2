"use client";
import { useState } from 'react';
import DescripcionSection from '@/components/DescripcionComponent';
import styles from '../especialidades.module.css';
import { INFO_DATA } from '@/assets/static/especialidades/informatica';

export default function ElectroPage() {
    const [data, setData] = useState(INFO_DATA);
    return <>
    
        {/* 
            videoURL
            acercaDeEspecialidad
            diseñoCurricularSRC
            practicasInfo
            continuidadInfo
            LaboralInfo
            Galeria
        */}

        <DescripcionSection
            videoURL={data.videoURL}
            acercaDeEspecialidad={data.acercaDeEspecialidad}
            diseñoCurricularSRC={data.diseñoCurricularSRC}
        />

        <div className={styles.masInformacion}>
            {/* Esta sección tengo pensada hacer la idea que vi en el video, y en mobil que sea uno solo, o no se ya veré que hago */}

            {/* Tarjeta practicasProfesionalizantes .map(practicasInfo) */}

            {/* Tarjeta ContinuidadEducativa .map(continuidadInfo) */}
            
            {/* Tarjeta SalidaLaboral .map(LaboralInfo) */}
        </div>

        <div className={styles.galeria}>

            <div className="galeria-container">
                {/* {galeria.map(imageSRC => <GaleriaImagen src={imageSRC} />)} */}
            </div>

        </div>

    </>
}
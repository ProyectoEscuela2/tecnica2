"use client"
import { useState } from 'react';
import styles from './especialidades.module.css';
import { MdElectricBolt, MdApartment } from 'react-icons/md';
import { FaMicrochip } from 'react-icons/fa6';
import { AiFillExperiment } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function EspecialidadesComponent({ className = "", ActualPath}) {

    const path = usePathname();
    const linkElectro = "/especialidades/electromecanica"
    const linkInfo = "/especialidades/informatica"
    const linkQuimica = "/especialidades/quimica"
    const linkConstrucciones = "/especialidades/construcciones"


    const pathConstrucciones = `${path === linkConstrucciones ? styles.active : ''}`
    const pathQuimica = `${path === linkQuimica ? styles.active : ''}`
    const pathElectro = `${path === linkElectro ? styles.active : ''}`
    const pathInfo = `${path === linkInfo ? styles.active : ''}`




    return <>

        <nav className={`${styles.nav} ${className}`}>
            <ul>
                <li>
                    <Link href={linkElectro} className={`${pathElectro} ${styles.animation0}`}>
                        <MdElectricBolt size={25} />
                        Electromecánica
                    </Link>
                </li>
                <li>
                    <Link href={linkInfo} className={`${pathInfo} ${styles.animation1}`}>
                        <FaMicrochip size={25} />
                        Informática
                    </Link>
                </li>
                <li>
                    <Link href={linkQuimica} className={`${pathQuimica} ${styles.animation2}`}>
                        <AiFillExperiment size={25} />
                        Química
                    </Link>
                </li>
                <li>
                    <Link href={linkConstrucciones} className={`${pathConstrucciones} ${styles.animation3}`}>
                        <MdApartment size={25} />
                        Construcciones
                    </Link>
                </li>
            </ul>
        </nav>

    </>
}
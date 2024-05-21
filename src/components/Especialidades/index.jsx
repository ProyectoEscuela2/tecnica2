import styles from './especialidades.module.css';
import { MdElectricBolt, MdApartment } from 'react-icons/md';
import { FaMicrochip } from 'react-icons/fa6';
import { AiFillExperiment } from 'react-icons/ai';
import Link from 'next/link';

export default function EspecialidadesComponent({ className = "" }) {
    return <>

        <nav className={`${styles.nav} ${className}`}>
            <ul>
                <li>
                    <Link href="/especialidades/electromecanica">
                        <MdElectricBolt size={25} />
                        Electromecánica
                    </Link>
                </li>
                <li>
                    <Link href="/especialidades/informatica">
                        <FaMicrochip size={25} />
                        Informática
                    </Link>
                </li>
                <li>
                    <Link href="/especialidades/quimica">
                        <AiFillExperiment size={25} />
                        Química
                    </Link>
                </li>
                <li>
                    <Link href="/especialidades/construcciones">
                        <MdApartment size={25} />
                        Construcciones
                    </Link>
                </li>
            </ul>
        </nav>

    </>
}
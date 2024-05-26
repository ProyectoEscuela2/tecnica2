import Especialidades from '@/components/Especialidades';
import styles from './especialidades.module.css';

export const metadata = {
    title: "Especialidades - EESTN2"
}

export default function EspecialidadesPage({ children }) {

    return <div id={styles.Especialidades}>
    
        <h2 className="text-center mb-4">Nuestras especialidades</h2>
        <Especialidades />

        <div className="container-sm">
            {children}
        </div>

    </div>

}
import styles from './galeria.module.css';

export function ImagenComponent({ src, alt }) {
    return <>
    
        <div className={styles.Imagen}>
            <img src={src} alt={alt} />
        </div>

    </>
}

export default function GaleriaComponent({ galeria }) {
    return <div className="my-5">

        <div className={`${styles.Galeria}`}>
            {galeria.map(imagen => <ImagenComponent key={imagen.id} src={imagen.src} alt={imagen.alt} />)}
        </div>

    </div>
}
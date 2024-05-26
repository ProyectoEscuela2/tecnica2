import { useState , useEffect } from 'react';
import CarouselComponent from '../Carousel';
import styles from './galeria.module.css';
import "./galeriaAnimacion.css"
import { useInView } from 'react-intersection-observer';

export function ImagenComponent({ src, alt, id }) {

    const [ref,inView] = useInView()

    const [isVisible,setIsVisible] = useState(false)

    useEffect(() =>{

        if(inView && isVisible == false){
            setIsVisible(!isVisible)
        }

    },[inView,isVisible])

    const classVisible = `${isVisible ? 'visible' : ''}`

    return <>  
    
        <div ref={ref} className={`${id} ${classVisible} ${styles.Imagen}`}>
            <img src={src} alt={alt} />
        </div>

    </>
}

export default function GaleriaComponent({ galeria }) {
    
    
    
    return <div className="my-5">


        
        <h4 className={styles.tituloGaleria}>Galeria de la especialidad</h4>
        
        <div className={`${styles.Galeria}`}>
            {galeria.map(imagen => <ImagenComponent key={imagen.id} src={imagen.src} alt={imagen.alt} id={imagen.id} />)}
        </div>

        <div className={`${styles.CarouselContainer}`}>
            <CarouselComponent items={galeria} />
        </div>

        

    </div>
}
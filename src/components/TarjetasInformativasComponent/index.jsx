import { useState, useEffect, useCallback } from 'react';
import styles from './tarjetasinfo.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from 'react-intersection-observer';

export function CardComponent({ id, title, items, initialIsActive}) {
    
    const [isActive, setActiveItem] = useState(initialIsActive)


    const itemClick = () => {
        setActiveItem(!isActive)
    } 

    const [ref,inView] = useInView()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{

        if(inView && isVisible == false){
            setIsVisible(!isVisible)
        }
    },[inView, isVisible])

    const activarItem = `${isVisible ? styles.itemVisible : ''}`


    return <>

        <div ref={ref} id={id} className={`${styles.Card} ${activarItem} ${isActive ? styles.ActiveCard : ''}`}>
            <div className={styles.CardHeader} onClick={itemClick}>
                <div className={styles.cardText}>{title}</div><div className={styles.cardIcon}><IoIosArrowDown /></div>
            </div>

            <div className={styles.CardBody}>
                <ul>
                    {items.map(item => <li key={item.id}>{item.nombre}</li>)}
                </ul>
            </div>
        </div>

    </>
}


function cerrarActive(id, isActive){

    alert(id,isActive)

}




export default function TarjetasInformativasComponent({ practicasInfo, continuidadInfo, laboralInfo}) {

    // Controlador de Tarjetas mediante la asignación de IDs
    let _TarjetasInfo = [
        { id: "id0", title: "Practicas Profecionalizantes", items: practicasInfo },
        { id: "id1", title: "Continuidad Estudiantíl", items: continuidadInfo },
        { id: "id2", title: "Salidas Laborales", items: laboralInfo },
    ]

    return <>
    
        <div className={`${styles.masInformacion} my-5`}>
            {_TarjetasInfo.map(({id, title, items}) => (
                <CardComponent
                    key={id}
                    id={id}
                    title={title}
                    items={items}
                    initialIsActive={false}
                />
            ))}
            
        </div>
    
    </>
}
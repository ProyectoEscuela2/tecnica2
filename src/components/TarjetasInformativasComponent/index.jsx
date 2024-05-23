"use client";
import { useState } from 'react';
import styles from './tarjetasinfo.module.css';

export function CardComponent({ id, title, items, isActive, onClick }) {
    // Esta función `handleClick` controla el state `activeItem` del componente `TarjetasInformativasComponent`
    const handleClick = () => onClick(id); // Nota: Podría hacer que si ya está seleccionado y hago click, se deseleccione

    return <>

        <div className={`${styles.Card} ${isActive ? styles.ActiveCard : ''}`}>
            <div className={styles.CardHeader} onClick={handleClick}>
                {title}
            </div>

            <div className={styles.CardBody}>
                <ul>
                    {items.map(item => <li key={item.id}>{item.nombre}</li>)}
                </ul>
            </div>
        </div>

    </>
}

export default function TarjetasInformativasComponent({ practicasInfo, continuidadInfo, laboralInfo}) {
    const [activeItem, setActiveItem] = useState(null); // Recibe el id desde `CardComponent`

    // Controlador de Tarjetas mediante la asignación de IDs
    let _TarjetasInfo = [
        { id: 0, title: "Practicas Profecionalizantes", items: practicasInfo },
        { id: 1, title: "Continuidad Estudiantíl", items: continuidadInfo },
        { id: 2, title: "Salidas Laborales", items: laboralInfo },
    ]

    return <>
    
        <div className={`${styles.masInformacion} my-5`}>
            {_TarjetasInfo.map(({id, title, items}) => (
                <CardComponent
                    key={id}
                    id={id}
                    title={title}
                    items={items}
                    isActive={(id == activeItem) ? true : false}
                    onClick={setActiveItem}
                />
            ))}
            
        </div>
    
    </>
}
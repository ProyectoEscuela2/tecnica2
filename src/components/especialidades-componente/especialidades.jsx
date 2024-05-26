import { MdElectricBolt } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa6";
import { AiFillExperiment } from "react-icons/ai";
import { MdApartment } from "react-icons/md";
import "./especialidades-comp.css";
import Link from 'next/link';
import { useInView } from "react-intersection-observer";
import { useState,useEffect } from "react";

export function Especialidades({ className }){

    const [ref, inView] = useInView()

    const [isActive,setIsActive] = useState(false)

    useEffect(() =>{

        if(inView && isActive == false){
            setIsActive(!isActive)
        }

    },[inView,isActive])

    const classActive = `${isActive ? 'active': ''}`

    return<>

        <h2 className="especialidades-titulo">Nuestras Especialidades</h2>
        <div ref={ref} className={`contenedor-especialidades ${classActive}`}>   
            <Link href="/especialidades/electromecanica" className="especialidad">     
                <div className="align"><MdElectricBolt size={40}/><br /><p className="noMargin">Electromecanica</p></div>
            </Link>
            <Link href="/especialidades/informatica"className="especialidad">
                <div className="align"><FaMicrochip size={40}/><br /><p className="noMargin">Informatica</p></div>          
            </Link>
            <Link href="/especialidades/quimica" className="especialidad">
                <div className="align"><AiFillExperiment size={40}/><br /><p className="noMargin">Quimica</p></div>           
            </Link>
            <Link href="/especialidades/construcciones" className="especialidad">
                <div className="align"><MdApartment size={40}/><br /><p className="noMargin">Construcciones</p></div>
            </Link>

        </div>
    
    
    </>
}
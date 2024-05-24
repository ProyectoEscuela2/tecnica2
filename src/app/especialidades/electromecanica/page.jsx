"use client";
import { useState } from 'react';
import DescripcionSection from '@/components/DescripcionComponent';
import { ELECTRO_DATA } from '@/assets/static/especialidades/electromecanica';
import TarjetasInformativasSection from '@/components/TarjetasInformativasComponent';
import GaleriaSection from '@/components/Galeria';

export default function ElectroPage() {
    const [data, setData] = useState(ELECTRO_DATA);
    return <>

        <DescripcionSection
            videoURL={data.videoURL}
            acercaDeEspecialidad={data.acercaDeEspecialidad}
            diseñoCurricularSRC={data.diseñoCurricularSRC}
            titulo={data.titulo}
        />

        <hr />

        <TarjetasInformativasSection
            practicasInfo={data.practicasInfo}
            continuidadInfo={data.continuidadInfo}
            laboralInfo={data.laboralInfo}
        />

        <hr />

        <GaleriaSection galeria={data.galeria} />

    </>
}

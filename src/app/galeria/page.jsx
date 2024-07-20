"use client";
import { useState, useRef } from 'react';
import { IMAGENES } from '@/assets/static/Galeria/imagenes.js';
import { ESPECIALIDADES } from '@/assets/static/especialidades/especialidades.js';
import ImagenGaleria from '@/components/ImagenGaleria';
import './galeria.css';

export default function GaleriaPage() {
	// EL ESTADO GUARDA LA OPCIÓN DEL USUARIO
	const [filter, setFilter] = useState(null);
	const selectRef = useRef();

	// AL MODIFICAR EL ESTADO, EL FILTRO ES APLICADO AL RENDERIZADO DE IMÁGENES
	const changeFilter = (event) => {
		event.preventDefault();
		const newFilter = (selectRef.current.value === "null") ? null : selectRef.current.value;
		setFilter(newFilter);
	}

	return <div className="container">
		{/* EL FORMULARIO ACTIVA EL FILTRO */}
		<form onSubmit={changeFilter}>
			{/* FILTRO */}
			<div className="row mt-5">
				<div className="col-8 col-sm-6">
					<select className="form-control form-select" ref={selectRef}>
						<option default value="null">No aplicar filtro</option>
						{ESPECIALIDADES.map(({id, nombre, value}) => (
							<option key={id} value={value}>{nombre}</option>
						))}
					</select>
				</div>

				<div className="col-2">
					<button className="btn btn-dark" type="submit">
						Buscar
					</button>
				</div>
			</div>
		</form>

		{/* RENDERIZADO DE IMÁGENES */}
		<div className="row">
			<div className="grid-contenedor col-12">
				{IMAGENES.filter( // FILTRAMOS EL ARREGLO
					({ especialidad }) => filter === null || especialidad === filter
				).map(({id, src, alt}) => ( // PARA LUEGO MAPEARLO
					<ImagenGaleria key={id} src={src} alt={alt} />
				))}
			</div>
		</div>
	</div>;
}

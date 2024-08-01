"use client";
import { useState } from 'react';
import { ESPECIALIDADES } from '@/assets/static/especialidades/especialidades.js';
import './mediaobject.css';

// La prop `especialidad` es un objeto: {value, name}
export default function MediaObject({ id, onRemove, onSave, src, alt, especialidad}) {
	const [isModify, setModify] = useState(false);
	const [Title, setTitle] = useState(alt);
	const [Especialidad, setEspecialidad] = useState(especialidad);

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	}

	const handleChangeEspecialidad = (e) => {
		let i = e.target.selectedIndex - 1;
		let _especialidad = {
			value: ESPECIALIDADES[i].value || "",
			nombre: ESPECIALIDADES[i].nombre || "Ninguna"
		};

		setEspecialidad(_especialidad);
	}

	const handleModifyTrue = (e) => {
		setModify(true);
	}

	const handleModifyFalse = (e) => {
		setModify(false);
		onSave(id, Title, Especialidad);
	}

	return <>
		<div className="MediaObject">
			<div className="MediaObject__Image">
				<img src={src} />
			</div>
			<div className="MediaObject__Body">
				{(isModify) ? (<>
					<h5><input className="input-normalize" type="text" onChange={handleChangeTitle} value={Title} /></h5>
					<p>
						<select className="input-normalize" onChange={handleChangeEspecialidad} value={Especialidad.value}>
							<option value="">Ninguna</option>
							{ESPECIALIDADES.map(({id, nombre, value}) => (
								<option key={id} value={value}>{nombre}</option>
							))}
						</select>
					</p>
				</>) : (<>
					<h5>{alt}</h5>
					<p>Especialidad: <i>{especialidad.nombre}</i></p>
				</>)}
				<div className="Options">
					{(isModify) ? (
						<button className="btn-normalize btn-modify" onClick={handleModifyFalse}>
							Guardar
						</button>
					) : (<>
						<button className="btn-normalize btn-modify" onClick={handleModifyTrue}>
							Modificar
						</button>
						<button className="btn-normalize btn-delete" onClick={() => onRemove(id)}>
							Eliminar
						</button>
					</>)}
				</div>
			</div>
		</div>
	</>
}

"use client";
import { useState, useRef } from 'react';
import MediaObject from '@/components/MediaObject';
import { IoMdImages } from "react-icons/io";

export default function AdminGaleriaAgregarPage() {
	const [items, setItems] = useState([]);
	const [ID, setID] = useState(0); // Conteo de imágenes | Evita la repetición de IDs
	const filesRef = useRef();

	// Maneja la carga de archivos del input
	const handleSubmitFiles = () => {
		let _files = [...filesRef.current.files];
		let _items = [];
		for(let i in _files) {
			let src = URL.createObjectURL(_files[i]);
			let alt = "Atalayas del reino";
			let especialidad = {value: "", nombre: "Ninguna"};
			_items.push({id: (ID + Number(i)).toString(), src, alt, especialidad});
		}
		setID(ID + _files.length);
		setItems([...items, ..._items]);
	}

	// Maneja el click del botón "X" | Limpia el estado y el value del input
	const handleRemoveFiles = (e) => {
		alert("¿Deseas eliminar todas las imágenes cargadas?\n Alerta: Esto borrará las imágenes seleccionadas.")
		filesRef.current.value = "";
		setItems([]);
	}

	// Maneja el click del botón "Eliminar" | Se hereda al MediaObject | Elimina el item seleccionado
	const handleRemoveFile = (id) => {
		let _items = items.filter(item => item.id != id);
		setItems(_items);
	}

	// Maneja el click del botón "Guardar" | Se hereda al MediaObject | Modifica el item seleccionado
	const handleModifyFile = (id, alt, especialidad) => {
		let _items = items.map(item => {
			if (item.id == id) {
				item.alt = alt;
				item.especialidad = especialidad
			}
			return item;
		});
		setItems(_items)
	}

	// Confirma la configuración de archivos y procede a subirlos al `imagenes.js`
	const handleConfirmFiles = () => {
		console.log(items);
	}

	return <div className="AdminGaleriaAgregarPage">
		<div className="AdminGaleriaAgregarPage__FileInput">
			<label htmlFor="FileInput">Seleccionar archivo(s):</label>
			<input
				type="file"
				accept=".jpg"
				id="FileInput"
				multiple
				onChange={handleSubmitFiles}
				ref={filesRef}
			/>
			<button className="btn-normalize" onClick={handleRemoveFiles}>X</button>
		</div>
		<div className="AdminGaleriaAgregarPage__Imagenes">
			{(items.length > 0) ? (<>
				{items.map(({id, src, alt, especialidad}) => (
					<MediaObject
						key={id}
						id={id}
						src={src}
						onRemove={handleRemoveFile}
						alt={alt}
						especialidad={especialidad}
						onSave={handleModifyFile}
					/>
				))}
				
				<div className="SaveChanges pt-4">
					<button className="btn-normalize w-100" onClick={handleConfirmFiles}>
						Guardar {items.length === 1 ? "Imagen" : "Imágenes"}
					</button>
				</div>				
			</>) : (
				<div className="DropContainer">
					<span><IoMdImages /></span>
					<i>Selecciona o arrastra aquí las imágenes que quieres agregar!</i>
				</div>
			)}
		</div>
	</div>
}
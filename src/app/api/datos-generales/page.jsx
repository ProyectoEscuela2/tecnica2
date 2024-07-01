export default function ApiDatosGeneralesPage() {
	return <div>
		<h4>Datos generales</h4>

		<form>
			<h6>Encabezado</h6>
			<label>Título: </label>
			<input type="text" placeholder="Ingresa el título" />

			<label>Descripción: </label>
			<textarea placeholder="Ingresa el título"></textarea>

			<label>Años: </label>
			<input type="number" placeholder="Ingresa los años de la escuela" />
			<button>Actualizar</button>
		</form>
		<form>
			<h6>Tarjetas</h6>
			<select>
				<option default>Seleccionar una tarjeta</option>
				{/* Generación automática */}
				<option value="tarjeta-1">Tarjeta 1</option>
				<option value="tarjeta-2">Tarjeta 2</option>
				<option value="tarjeta-3">Tarjeta 3</option>
			</select>
			<label>Icono: </label>
			<select>
				<option default>Selecciona un icono</option>
				<option value="icono-1">1{/* Icono */}</option>
				<option value="icono-2">2{/* Icono */}</option>
				<option value="icono-3">3{/* Icono */}</option>
				<option value="icono-4">4{/* Icono */}</option>
			</select>
			<textarea placeholder="Ingresa la descripción de la tarjeta"></textarea>
			<button>Actualizar</button>
		</form>
		<form>
			<h6>Horarios de atención</h6>
			<label>Seleccionar día: </label>
			<select>
				<option default>Selecciona un día</option>
				<option value="Lunes">Lunes</option>
				<option value="Martes">Martes</option>
				<option value="Miércoles">Miércoles</option>
				<option value="Jueves">Jueves</option>
				<option value="Viernes">Viernes</option>
				<option value="Sábado">Sábado</option>
				<option value="Domingo">Domingo</option>
			</select>
			<label>Turno Mañana:</label>
			<input type="time" /> hasta <input type="time" />
			<label>Turno Tarde:</label>
			<input type="time" /> hasta <input type="time" />
			<button>Actualizar</button>
		</form>
	</div>
}
export default function ApiEspecialidadesPage() {
	return <div>
		<h4>Especialidades</h4>
		<form>
			<h6>Especialidades</h6>
			<button>Agregar Especialidad</button>
			<button>Modificar Especialidad</button>
			<button>Eliminar Especialidad</button>
		</form>
		<form>
			<h6>Información de la especialidad</h6>
			<label>Selecciona una especialidad para editar su contenido:</label>
			<select>
				<option default>Selecciona una especialidad</option>
				{/* Generados automáticamente */}
				<option value="Informática">Informática</option>
				<option value="Química">Química</option>
				<option value="Electromecánica">Electromecánica</option>
				<option value="Construcciones">Construcciones</option>
			</select>

			<h6>Párrafos</h6>
			
			{/* Codigo generado, los parrafos son cards con botones para eliminar o modificar */}
			<div contenteditable="true">Lorem ipsum sit amet not quote alld wanout donut homer simpson</div>
			<div contenteditable="true">Lorem ipsum sit amet not quote alld wanout donut homer simpson</div>
			<div contenteditable="true">Lorem ipsum sit amet not quote alld wanout donut homer simpson</div>
			<div contenteditable="true">Lorem ipsum sit amet not quote alld wanout donut homer simpson</div>
			
			<h6>Video</h6>
			<label>Ingresa la url del video:</label>
			<input type="text" placeholder="https://youtube.com/4kgOkkvI93fV"/>
			
			<h6>Practicas Profecionalizantes</h6>
			<button>Agregar empresa</button>
			<button>Modificar empresa</button>
			<button>Eliminar empresa</button>

			<h6>Continuidad Estudiantil</h6>
			<button>Agregar Carrera</button>
			<button>Modificar Carrera</button>
			<button>Eliminar Carrera</button>

			<h6>Salidas laborales</h6>
			<button>Agregar Empresa</button>
			<button>Modificar Empresa</button>
			<button>Eliminar Empresa</button>
		</form>
	</div>
}
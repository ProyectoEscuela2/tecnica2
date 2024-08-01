import Link from 'next/link';

export default function NavAdminList() {
	return <div className="NavAdminList">
		<h4>Panel de control</h4>
		<hr />
		<ul className="NavAdminList__Nav">
			<li>
				<Link href="/admin/datos-generales">Datos generales</Link>
			</li>
			<li>
				<Link href="/admin/especialidades">Especialidades</Link>
			</li>
			<li>
				<Link href="/admin/galeria">Galería</Link>
			</li>
			{/* Base de datos */}
			<li>
				<Link href="/admin/inscripciones">Inscripciones</Link>
			</li>
			{/* Base de datos */}
			<li>
				<Link href="/admin/noticias">Noticias</Link>
			</li>
			{/* Base de datos */}
			<li>
				<Link href="/admin/contacto">Contacto</Link>
			</li>
		</ul>
	</div>
}
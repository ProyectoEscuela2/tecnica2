import Link from 'next/link';

export default function NavApiList() {
	return <>
		<ul>
			<h4>Contenido</h4>
			<li>
				<Link href="/api/datos-generales">Datos generales</Link>
			</li>
			<li>
				<Link href="/api/especialidades">Especialidades</Link>
			</li>
			<li>
				<Link href="/api/galeria">Galería</Link>
			</li>
			{/* Base de datos */}
			<li>
				<Link href="/api/inscripciones">Inscripciones</Link>
			</li>
			{/* Base de datos */}
			<li>
				<Link href="/api/noticias">Noticias</Link>
			</li>
			{/* Base de datos */}
			<li>
				<Link href="/api/contacto">Contacto</Link>
			</li>
		</ul>
	</>
}
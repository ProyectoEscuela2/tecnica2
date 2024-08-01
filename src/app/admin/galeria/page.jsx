import Link from 'next/link';

export default function AdminGaleriaIndexPage() {
	return <div className="AdminGaleriaIndexPage">
		<i>¿Qué tarea deseas hacer?</i>
		<nav>
			<i><Link href="/admin/galeria/ver">Ver Imágenes</Link></i>
			<i><Link href="/admin/galeria/agregar">Agregar Imágenes</Link></i>
		</nav>
	</div>
}
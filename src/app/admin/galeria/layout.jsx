import Link from 'next/link';
import './adminGaleria.css';

export default function AdminGaleriaLayout({ children }) {
	return <div className="AdminGaleriaLayout">
		<header>
			<nav className="AdminGaleriaLayout__Nav">
				<h4><Link href="/admin/galeria">Galería</Link></h4>
				<ul>
					<li><Link href="/admin/galeria/ver">Ver Imágenes</Link></li>
					<li><Link href="/admin/galeria/agregar">Agregar Imágenes</Link></li>
				</ul>
			</nav>
			<hr />
		</header>
		
		<section>
			{children}
		</section>
	</div>
}
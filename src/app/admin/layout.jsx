import NavAdminList from '@/components/NavAdminList';
import { Roboto } from 'next/font/google';
import './style.css';
import './configuraciones.css';

export const metadata = {
	title: "Galería | Admin EEST N2"
}

const roboto = Roboto({
	subsets: ['latin'],
	weight: ["400", "500"],
});

export default function AdminLayout({ children }) {
	return <div className={`${roboto.className} AdminLayout`}>
		<nav className="AdminLayout__Nav">
			<NavAdminList />
		</nav>

		<section className="AdminLayout__Section">
			{children}
		</section>
	</div>
}
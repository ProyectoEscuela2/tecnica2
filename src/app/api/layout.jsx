import NavApiList from '@/components/NavApiList';
import './style.css';
import './configuraciones.css';

export default function ApiLayout({ children }) {
	return <div className="ApiLayout">
		<nav>
			<NavApiList />
		</nav>

		<section>
			{children}
		</section>
	</div>
}
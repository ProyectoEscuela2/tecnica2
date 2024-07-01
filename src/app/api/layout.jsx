import NavApiList from '@/components/NavApiList';

export default function ApiLayout({ children }) {
	return <div>
		<div>
			<div>
				<NavApiList />
			</div>
			<div>
				{children}
			</div>
		</div>
	</div>
}
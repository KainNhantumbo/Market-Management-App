import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { DashboardContainer as Container } from '../../styles/admin-dashboard';

export default function Dashboard() {
	return (
		<Container>
			<Aside />
			<Header location='Dashboard' />
			<main>
				<article className='page'>
					<section className='cards-container'>d</section>
				</article>
			</main>
		</Container>
	);
}

import Contact from './components/Contact';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
	return (
		<div className="app">
			<Intro />
			<Portfolio />
			<Timeline />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

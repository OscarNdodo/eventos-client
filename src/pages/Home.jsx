import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

const Home = () => {

	return (
		<>
			<main>
				<SectionOne />
				<SectionTwo/>
			</main>
			<footer>
				<SectionThree />
			</footer>
		</>
	)
}

export default Home;
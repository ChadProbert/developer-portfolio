import Head from "next/head";

// components
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";

// displaying components on the page
// added a title to the page
export default function IndexRoute() {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Chad Probert | Portfolio</title>
			</Head>
			<Header />
			<AboutMe />
		</div>
	);
}

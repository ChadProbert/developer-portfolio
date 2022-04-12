import Head from "next/head";

// components
import Header from "../components/Header";
import Projects from "../components/Projects";

// displaying components on the page
// added a title to the page
export default function ProjectsRoute() {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Chad Probert | Portfolio</title>
			</Head>
			<Header />
			<Projects />
		</div>
	);
}

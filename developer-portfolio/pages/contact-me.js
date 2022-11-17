import Head from "next/head";

// components
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";

// displaying components on the page
// added a title to the page
export default function ContactMeRoute() {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Chad Probert | Portfolio</title>
			</Head>
			<Header />
			<ContactMe />
		</div>
	);
}

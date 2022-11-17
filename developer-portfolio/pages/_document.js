import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Google Fonts */}
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap"
					rel="stylesheet"
				/>

				{/* Bootstrap CDN */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

/* references: 

https://fonts.google.com/

https://getbootstrap.com/


*/

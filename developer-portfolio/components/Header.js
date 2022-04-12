import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

export default function Header() {
	return (
		<div className="header">
			<h3 className="name">Chad Probert</h3>
			<h3 className="title">Junior Web Developer</h3>

			<br />

			<Image
				className="profileImage"
				src="/me.jpeg"
				height={200}
				width={200}
				alt="Me"
			/>

			{/* icons thats are linked to my socials */}
			<ul>
				{/* GitHub: */}
				<li>
					<Link href="https://github.com/ChadProbert">
						{/* navigates a user to the link from a new tab instead of the current tab */}
						<a target="_blank">
							<i className="fab fa-github-square fa-3x" />
						</a>
					</Link>
				</li>

				{/* WhatsApp: */}
				<li>
					<Link href="https://wa.me/0609849667">
						<a target="_blank">
							<i className="fab fa-whatsapp-square fa-3x" />
						</a>
					</Link>
				</li>

				{/* Discord: */}
				<li>
					<Link href="https://discordapp.com/users/861574531763273729">
						<a target="_blank">
							<i className="fab fa-discord fa-3x" />
						</a>
					</Link>
				</li>

				{/* LinkedIn: */}
				<li>
					<Link href="https://linkedin.com/in/chad-probert-6421b321b">
						<a target="_blank">
							<i className="fab fa-linkedin fa-3x" />
						</a>
					</Link>
				</li>
			</ul>

			{/* Navigation bar: */}
			<Container fluid>
				<Row>
					<Col md className="column">
						{/* scroll={false} ensures that the page does not scroll to the top of
						the page after navigation which creates a smoother transition between routes */}
						<Link href="/" scroll={false}>
							<a className="aboutMeLink">
								<div className="navAbout">
									<h3 className="aboutMeHeading">About Me</h3>
								</div>
							</a>
						</Link>
					</Col>
					<Col md className="column">
						<Link href="/projects" scroll={false}>
							<a className="projectsLink">
								<div className="navProjects">
									<h3 className="projectsHeading">Projects</h3>
								</div>
							</a>
						</Link>
					</Col>
					<Col md className="column">
						<Link href="/contact-me" scroll={false}>
							<a className="contactMeLink">
								<div className="navContactMe">
									<h3 className="contactMeHeading">Contact Me</h3>
								</div>
							</a>
						</Link>
					</Col>
				</Row>
			</Container>

			<style jsx>
				{`
					.header {
						text-align: center;
						color: #f5f6f7;
						margin-top: 55px;
					}

					.name {
						font-weight: bold;
						font-size: 55px;
					}

					.title {
						font-weight: 300;
						font-size: 25px;
						margin: 30px;
					}

					/* removed the default bullet points and padding applied to listed items */
					ul {
						list-style: none;
						padding: 0;
						/* spacing between the image and the icons */
						margin-top: 30px;
					}

					/* displayed the social icons horizontals */
					.header ul li {
						display: inline-block;
					}

					/* removes the blue color and underline applied to links */
					a {
						color: #f5f6f7;
						text-decoration: none;
					}

					.fab {
						/* controls the spacing between the social icons */
						margin: 20px;
						/* controls the sizing of the social icons */
						font-size: 60px;
					}

					/* increases the size of the icons when hovering over them */
					.fab:hover {
						transform: scale(1.1);
					}

					.navAbout,
					.navProjects,
					.navContactMe {
						height: 100px;
						background-color: #3b414e;
						margin-top: 30px;
					}

					.navAbout:hover,
					.navProjects:hover,
					.navContactMe:hover {
						background-color: #313742;
					}

					.aboutMeHeading,
					.projectsHeading,
					.contactMeHeading {
						/* centered the headings vertically using the browser inspect tool */
						padding-top: 37px;
						font-size: 26px;
					}
				`}
			</style>

			<style global jsx>{`
				body {
					background: url("/img11.jpeg");
					background-size: cover;
					/* applied Google Font */
					font-family: Montserrat, sans-serif;
				}

				.profileImage {
					/* creates the rounded effect */
					border-radius: 50%;
					/* creates the double border effect */
					padding: 7px !important;
					border: 2.5px solid #474e5d !important;
					background-color: #f5f6f7;
				}

				/* removes the spacing between columns */
				.column {
					padding: 0;
				}
			`}</style>
		</div>
	);
}

/*references:

https://fontawesome.com/

https://johnny.am/blog/n2-adding-google-fonts-to-nextjs-project

https://zhengchaotian.com/using-fontawesome-with-nextjs/

https://flaviocopes.com/nextjs-open-link-new-window/#:~:text=You%20first%20wrap%20the%20a,well%20with%20client%2Dside%20routing.

https://stackoverflow.com/questions/1695175/how-to-horizontally-center-an-unordered-list-of-unknown-width

https://www.creative-tim.com/learning-lab/nextjs/grid/argon-dashboard

my own work from level 2 task 9

https://nextjs.org/docs/api-reference/next/link

https://react-bootstrap.github.io/

*/

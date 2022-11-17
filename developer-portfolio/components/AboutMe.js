import { Row, Col, Container } from "reactstrap";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

export default function AboutMe() {
	return (
		<div>
			<div className="aboutMe">
				<h3 className="aboutMeHeading">About Me</h3>
				<p className="aboutMeContent">
					I am a full-stack web developer with a passion for learning and
					creating. I aspire to combine my passions and understanding of
					technological advancement to develop and maintain websites and web
					applications that people can become fully immersed in and will find
					joy in utilizing.
				</p>
			</div>

			<Container fluid className="backgroundInfo">
				{/* split education, skills & competencies and work experience into 3 columns */}
				<Row>
					{/* Education column: */}
					<Col md>
						<h3 className="educationHeading">
							Education <i className="fas fa-graduation-cap fa-1x" />
						</h3>
						<h4 className="educationItem">HyperionDev</h4>
						<p>
							Full Stack Web Development
							<br />
							Online Course
							<br />( July 2021 - Present )
						</p>

						<br />

						<h4 className="educationItem">Basic Fire Fighting</h4>
						<p>
							Online Course
							<br />
							Completed in 2021
						</p>

						<br />

						<h4 className="educationItem">Pearson High School</h4>
						<p>
							Summerstrand, Port Elizabeth, South Africa
							<br />
							Diploma Pass
							<br />( 2015 - 2019 )
						</p>
					</Col>

					{/* Skills & Competencies column: */}
					<Col md>
						<h3 className="skillsHeading">
							Skills & Competencies <i className="fas fa-code fa-1x" />
						</h3>
						<ul>
							<li className="skillsItem">
								HTML <i className="fa-brands fa-html5 fa-1x htmlIcon" />
							</li>
							<li className="skillsItem">
								CSS <i className="fa-brands fa-css3-alt fa-1x cssIcon" />
							</li>
							<li className="skillsItem">
								JavaScript{" "}
								<i className="fa-brands fa-js fa-1x javascriptIcon" />
							</li>
							<li className="skillsItem">
								React.js <i className="fa-brands fa-react fa-1x reactIcon" />
							</li>
							<li className="skillsItem">
								Next.js <SiNextdotjs color="#000000" />
							</li>
							<li className="skillsItem">
								Node.js <i className="fa-brands fa-node-js fa-1x nodeIcon" />
							</li>
							<li className="skillsItem">
								MongoDB <SiMongodb color="#0fa14c" />
							</li>
							<li className="skillsItem">Proactive thinking</li>
							<li className="skillsItem"> Effective communication</li>
							<li className="skillsItem">Problem-solving</li>
						</ul>
					</Col>

					{/* Work experience column: */}
					<Col md>
						<h3 className="workHeading">
							Work Experience <i className="fas fa-briefcase fa-1x" />
						</h3>
						<h4 className="workItem">Merchandiser</h4>
						<p>
							Build It Circular Drive
							<br />( March 2020 - June 2021 )
						</p>
					</Col>
				</Row>
			</Container>

			<style jsx>{`
				.aboutMe {
					padding-top: 80px;
					padding-bottom: 80px;
					color: #f5f6f7;
					text-align: center;
					background-color: #474e5d;
				}

				.aboutMeHeading {
					font-size: 24px;
					margin-bottom: 25px;
				}

				.aboutMeContent {
					margin: auto;
					width: 80%;
				}

				.educationHeading,
				.skillsHeading,
				.workHeading {
					font-size: 24px;
					margin-top: 75px;
					margin-bottom: 45px;
					font-weight: bold;
				}

				.educationItem,
				.workItem {
					font-size: 18px;
					font-weight: bold;
				}

				.skillsItem {
					font-size: 20px;
					font-weight: bold;
				}

				.skillsItem {
					margin-bottom: 10px;
				}

				/* removed the bullet points and padding applied to list items */
				ul {
					list-style-type: none;
					padding: 0px;
				}

				/* set icon colours to match their logo colours: */
				.htmlIcon {
					color: #d84924;
				}
				.cssIcon {
					color: #146cad;
				}
				.javascriptIcon {
					color: #e4d04a;
				}
				.reactIcon {
					color: #5dd2f1;
				}
				.nodeIcon {
					color: #85bc48;
				}
			`}</style>
			<style global jsx>
				{`
					.backgroundInfo {
						background-color: #f5f6f7;
						color: #474e5d;
						text-align: center;
						padding-bottom: 70px;
					}
				`}
			</style>
		</div>
	);
}

/* references: 

https://fontawesome.com/

my own work from level 2 task 6

my own work from level 3 task 8

https://react-icons.github.io/react-icons 

https://react-bootstrap.github.io/

*/

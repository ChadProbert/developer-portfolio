// React-Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// MaterialUI components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Projects() {
	return (
		<div className="projects">
			<h3 className="projectsHeading">My projects</h3>
			<Container fluid>
				<Row>
					{/* Column 1 */}
					<Col md>
						<Accordion className="accordion">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="expandIcon" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{/* accordion heading */}
								<Typography className="accordionHeading">
									Media Search Application
								</Typography>
							</AccordionSummary>
							{/* content displayed once the accordion has been opened */}
							<AccordionDetails className="accordionDetails">
								<Typography className="projectDetails">
									<h6 className="languagesHeading">Languages</h6>
									JavaScript, CSS and HTML
									<br />
									<br />
									<h6 className="frameworksHeading">Frameworks</h6>
									React.js, Node.js and Express.js
									<br />
									<br />
									<h6 className="aboutHeading">About</h6>
									A media search application that allows users to search for
									media content such as music, music videos, books, movies and
									more. The application uses the Apple Store API to retrieve
									media content. The user can filter the search results by media
									type. The application also allows the user to add a search
									result to their list of favourites.
									<br />
									<br />
									<a
										href="https://github.com/ChadProbert/media-search"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="githubButton">
											<i className="fa-brands fa-github fa-1x githubIcon" />
											repository
										</Button>
									</a>
									<a
										href="https://media-search-application.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="websiteButton">
											<i className="fa-solid fa-globe fa-1x webIcon" />
											website
										</Button>
									</a>
								</Typography>
							</AccordionDetails>
						</Accordion>

						<br />

						<Accordion className="accordion">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="expandIcon" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{/* accordion heading */}
								<Typography className="accordionHeading">
									Online store website
								</Typography>
							</AccordionSummary>
							{/* content displayed once the accordion has been opened */}
							<AccordionDetails className="accordionDetails">
								<Typography className="projectDetails">
									<h6 className="languagesHeading">Languages</h6>
									HTML, Vanilla JavaScript and CSS
									<br />
									<br />
									<h6 className="aboutHeading">About</h6>
									A simple online store website that allows users to browse and
									add products to their cart. The user can view their cart,
									remove an item/s from the cart, increase or decrease the
									quantity of an item in their cart and view the products total
									cost, the separate VAT total and the total including VAT.
									<br />
									<br />
									<a
										href="https://github.com/ChadProbert/Capstone-Project"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="githubButton">
											<i className="fa-brands fa-github fa-1x githubIcon" />
											repository
										</Button>
									</a>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Col>

					{/* Column 2 */}
					<Col md>
						<Accordion className="accordion">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="expandIcon" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{/* accordion heading */}
								<Typography className="accordionHeading">
									To-do list application
								</Typography>
							</AccordionSummary>
							{/* content displayed once the accordion has been opened */}
							<AccordionDetails className="accordionDetails">
								<Typography className="projectDetails">
									<h6 className="languagesHeading">Languages</h6>
									JavaScript, CSS and HTML
									<br />
									<br />
									<h6 className="frameworksHeading">Frameworks</h6>
									React.js, Node.js, Express.js and Mongoose
									<br />
									<br />
									<h6 className="databaseHeading">Database</h6>
									MongoDB
									<br />
									<br />
									<h6 className="aboutHeading">About</h6>
									A to-do list web app that allows users to create and delete
									to-do items. The application uses JWT to authenticate users
									and MongoDB to store an authenticated user's to-do items.
									<br />
									<br />
									<a
										href="https://github.com/ChadProbert/quickr-to-do-list"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="githubButton">
											<i className="fa-brands fa-github fa-1x githubIcon" />
											repository
										</Button>
									</a>
								</Typography>
							</AccordionDetails>
						</Accordion>

						<br />

						<Accordion className="accordion">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="expandIcon" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{/* accordion heading */}
								<Typography className="accordionHeading">
									Minesweeper application
								</Typography>
							</AccordionSummary>
							{/* content displayed once the accordion has been opened */}
							<AccordionDetails className="accordionDetails">
								<Typography className="projectDetails">
									<h6 className="languagesHeading">Languages</h6>
									JavaScript, CSS and HTML
									<br />
									<br />
									<h6 className="frameworksHeading">Frameworks</h6>
									React.js
									<br />
									<br />
									<h6 className="aboutHeading">About</h6>
									A Minesweeper clone based off of Microsoft's Minesweeper. The
									game is played by clicking on a tile. If the tile is a mine,
									the game is over. If the tile is not a mine, the number of
									adjacent mines is displayed. The user can flag a tile if they
									think that tile contains a mine underneath. The game is won
									when all non-mine tiles are revealed. The game is lost when a
									mine is revealed. The game is reset when the user clicks the
									"RESTART" button. The game is reset to a new board with a new
									set of mines. The web app features a homepage, a game page,
									and a help page.
									<br />
									<br />
									<a
										href="https://github.com/ChadProbert/minesweeper-react-app"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="githubButton">
											<i className="fa-brands fa-github fa-1x githubIcon" />
											repository
										</Button>
									</a>
									<a
										href="https://minesweeper-react-app.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="websiteButton">
											<i className="fa-solid fa-globe fa-1x webIcon" />
											website
										</Button>
									</a>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Col>

					{/* Column 3 */}
					<Col md>
						<Accordion className="accordion">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="expandIcon" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{/* accordion heading */}
								<Typography className="accordionHeading">
									Database handler application
								</Typography>
							</AccordionSummary>
							{/* content displayed once the accordion has been opened */}
							<AccordionDetails className="accordionDetails">
								<Typography className="projectDetails">
									<h6 className="languagesHeading">Languages</h6>
									JavaScript, CSS and HTML
									<br />
									<br />
									<h6 className="frameworksHeading">Frameworks</h6>
									React.js, Node.js, Express.js and Mongoose
									<br />
									<br />
									<h6 className="databaseHeading">Database</h6>
									MongoDB
									<br />
									<br />
									<h6 className="aboutHeading">About</h6>
									A database handler web app that was developed with car
									dealership employees in mind. The app allows users to view,
									create, modify and delete cars from their database. The
									application uses MongoDB to store cars in the form of
									documents with car details inside the documents. The app also
									allows users to filter the cars to only show cars older than 5
									years.
									<br />
									<br />
									<a
										href="https://github.com/ChadProbert/database-handler"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="githubButton">
											<i className="fa-brands fa-github fa-1x githubIcon" />
											repository
										</Button>
									</a>
								</Typography>
							</AccordionDetails>
						</Accordion>

						<br />

						<Accordion className="accordion">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="expandIcon" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								{/* accordion heading */}
								<Typography className="accordionHeading">
									Weather application
								</Typography>
							</AccordionSummary>
							{/* content displayed once the accordion has been opened */}
							<AccordionDetails className="accordionDetails">
								<Typography className="projectDetails">
									<h6 className="languagesHeading">Languages</h6>
									JavaScript, CSS and HTML
									<br />
									<br />
									<h6 className="frameworksHeading">Frameworks</h6>
									React.js
									<br />
									<br />
									<h6 className="aboutHeading">About</h6>
									A simple weather application that lets a user search for a
									city and get the current weather, max temperature and min
									temperature of that city displayed to them. The application
									uses the OpenWeatherMap API to get the weather data. The fetch
									request has been tested and a snapshot test was created to
									ensure the application works as expected.
									<br />
									<br />
									<a
										href="https://github.com/ChadProbert/weather-app-react"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="contained" className="githubButton">
											<i className="fa-brands fa-github fa-1x githubIcon" />
											repository
										</Button>
									</a>
									<a
										href="https://minesweeper-react-app.herokuapp.com/"
										target="_blank"
										rel="noopener noreferrer"
									></a>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Col>
				</Row>
			</Container>

			<style jsx>{`
				.projects {
					padding-top: 70px;
					padding-bottom: 70px;
					text-align: center;
					background-color: #474e5d;
					color: #f5f6f7;
				}

				.projectsHeading {
					font-size: 24px;
					/*  spacing between "My Projects" heading and the projects (accordions) */
					margin-bottom: 70px;
				}

				/* removed the blue underline applied to links */
				a {
					text-decoration: none;
				}
			`}</style>
			<style global jsx>
				{`
					.accordion {
						/* adjusts according to the user's screen width */
						/* 90% of the column length */
						width: 90%;
						/* centered the accordions inside their column */
						margin: auto !important;
						background-color: #0886d3;
						color: #f5f6f7;
						margin-bottom: 45px !important;
					}

					.accordionDetails {
						text-align: left !important;
						background-color: #3b414e;
						color: #f5f6f7;
					}

					.expandIcon {
						color: #f5f6f7;
					}

					.accordionHeading {
						/* applied Google Font  */
						font-family: "Rubik", sans-serif;
						font-weight: 600;
						text-transform: uppercase;
						margin-left: 5px;
					}

					.projectDetails {
						font-weight: 400 !important;
						margin-left: 5px;
						margin-top: 10px;
					}

					.githubButton {
						background-color: #1b1f23 !important;
						/* spacing between repository and website button */
						margin-right: 20px;
					}

					.websiteButton,
					.githubButton {
						font-weight: 400;
						font-size: 13px;
					}

					.websiteButton {
						background-color: #0886d3 !important;
					}

					/* added spacing between button icons and button text*/
					.githubIcon,
					.webIcon {
						margin-right: 5px;
					}

					.languagesHeading,
					.frameworksHeading,
					.databaseHeading,
					.aboutHeading {
						font-weight: bold;
					}
				`}
			</style>
		</div>
	);
}

/* references:

https://mui.com/

https://react-bootstrap.github.io/

my own work from level 3 task 8

https://copilot.github.com/

*/

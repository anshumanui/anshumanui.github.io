//	Import Declarations
import React from 'react';

import company from '../../assets/images/company.svg';
import calendar from '../../assets/images/calendar.svg';
import position from '../../assets/images/position.svg';


//	React Default Exported Functional Component Declaration
export default function WorkExperience () {
	/*
		::Package: Builds "work experience" component
			consists of all the previous projects
			and company details along with timeline
		::Author: Anshuman Mishra
		::Created on: 18th February, 2020
		::Updated on: 26th February, 2020
	*/

	return (
		<section className="uk-padding-small uk-padding-remove-vertical uk-margin-small-top">
			<h3 className="uk-text-uppercase uk-margin-remove uk-flex uk-flex-middle">
				<div className="uk-margin-small-right">Work Experience</div>
				<div className="uk-width-expand"></div>		
				<div></div>
			</h3>

			<div className="cv-subTitle">
				<div className="uk-flex uk-flex-middle">
					<div>
						<img src={ company } width="40" alt="company" />
					</div>
					<div>
						<h5 className="uk-margin-remove uk-text-uppercase"><span>JGD Tech</span></h5>
						<h5 className="uk-margin-remove uk-text-capitalize"><span>Client - Western Digital [Sandisk]</span></h5>
					</div>
				</div>
				
				<div className="uk-grid-small uk-grid-match uk-child-width-1-2" data-uk-grid>
					<div>
						<div className="uk-flex uk-flex-middle">
							<img src={ calendar } className="uk-margin-small-right uk-margin-small-top" alt="calendar" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted uk-margin-medium-right">Sep 2018 - Current <br /> [1 year 10 months]</h6>
						</div>
					</div>
					<div>
						<div className="uk-flex uk-flex-middle uk-flex-right">
							<img src={ position } className="uk-margin-small-right uk-margin-small-top" alt="position" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted">Position - Permanent <br /> Role - Team Lead</h6>
						</div>
					</div>
				</div>
			</div>

			<ul className="uk-list uk-list-divider">
				<li>						
					<h6 className="uk-text-bolder uk-margin-remove-vertical">Darwin</h6>
					<h6 className="uk-margin-remove">Focuses on LOT and DIE quality and categorization, number of wafers available. It tracks the process from factory to sale. Gives facility to manufacturing users to track the process and feed data to ML model. Engineering users keep track from binning to final sale.</h6>
				</li>
				<li>
					<h6 className="uk-text-bolder uk-margin-remove-vertical"><span>Astra CNE</span></h6>
					<h6 className="uk-margin-remove">Focuses on 192 DUTS system in 4 TRAYS which can run serial and parallel execution of automations and algorithms on SATA controller and carrier boards. It runs under different temperature and pressure in oven which insights are provided with charts and in table. Users can run command from dashboard to physically control the board.
					</h6>
				</li>
			</ul>

			<div className="cv-subTitle">
				<div className="uk-flex uk-flex-middle">
					<div>
						<img src={ company } width="40" alt="company" />
					</div>
					<div>
						<h5 className="uk-margin-remove uk-text-uppercase"><span>Blisstun</span></h5>
						<h5 className="uk-margin-remove uk-text-capitalize"><span>Client / Project</span></h5>
					</div>
				</div>

				<div className="uk-grid-small uk-grid-match uk-child-width-1-2" data-uk-grid>
					<div>
						<div className="uk-flex uk-flex-middle">
							<img src={ calendar } className="uk-margin-small-right uk-margin-small-top" alt="calendar" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted uk-margin-medium-right">Mar 2018 - Sep 2018 <br /> [0 year 6 months]</h6>
						</div>
					</div>
					<div>
						<div className="uk-flex uk-flex-middle uk-flex-right">
							<img src={ position } className="uk-margin-small-right uk-margin-small-top" alt="position" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted">Position - Contractor/Freelancer</h6>
						</div>
					</div>
				</div>
			</div>

			<ul className="uk-list uk-list-divider">
				<li>
					<h6 className="uk-margin-remove">Intelligent travel planning portal which focuses on creating optimised trips and helps in complete planning for layman. It provides the best possible mode of transport (road, rail and flight) by calculating proper duration hence reducing any kind of wastage of time during the trip. Starting from showing city details to point of interest details in particular city, user can add delete and view details of any city or place. Both map and grid view available for cities and point of interests. Users can provide comments and reviews for their trips, any city and places. They can also view top rated itineraries and experiences.
					</h6>
				</li>
			</ul>

			<div className="cv-subTitle cv-lineBreak">
				<div className="uk-flex uk-flex-middle">
					<div>
						<img src={ company } width="40" alt="company" />
					</div>
					<div>
						<h5 className="uk-margin-remove uk-text-uppercase"><span>Accenture Services</span></h5>
						<h5 className="uk-margin-remove uk-text-capitalize"><span>Client - Credit Suisse [APAC]</span></h5>
					</div>
				</div>

				<div className="uk-grid-small uk-grid-match uk-child-width-1-2" data-uk-grid>
					<div>
						<div className="uk-flex uk-flex-middle">
							<img src={ calendar } className="uk-margin-small-right uk-margin-small-top" alt="calendar" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted uk-margin-medium-right">Oct 2016 - Mar 2018 <br /> [1 year 6 months]</h6>
						</div>
					</div>
					<div>
						<div className="uk-flex uk-flex-middle uk-flex-right">
							<img src={ position } className="uk-margin-small-right uk-margin-small-top" alt="position" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted">Position - Permanent <br /> Role - Application Developer Senior Analyst</h6>
						</div>
					</div>
				</div>
			</div>

			<ul className="uk-list uk-list-divider">
				<li>						
					<h5 className="uk-text-bolder uk-margin-remove">Stock Lending &amp; Borrowing</h5>
					<h6 className="uk-margin-remove">Focuses on stock lending and borrowing information between two regions or servers and consolidates the data to be displayed.
					</h6>
				</li>
				<li>
					<h5 className="uk-text-bolder uk-margin-remove">Relationship Management</h5>
					<h6 className="uk-margin-remove">Focuses on relationship managers and assistant relationship managers and their relationship with clients. Includes features such as workflow dashboard, notebook and call reports.
					</h6>
				</li>
				<li>
					<h5 className="uk-text-bolder uk-margin-remove">Digital to Digital</h5>
					<h6 className="uk-margin-remove">Focuses on digitalizing the paperwork and archiving the data to IBMoD. Involves filtering the Excel and pdf from front end.
					</h6>
				</li>
				<li>
					<h5 className="uk-text-bolder uk-margin-remove">PBIT Support Tool</h5>
					<h6 className="uk-margin-remove">Gateway or entry portal to other different dashboards. Monitoring dashboard which displays the health of the servers at real time.
					</h6>
				</li>
			</ul>

			<div className="cv-subTitle">
				<div className="uk-flex uk-flex-middle">
					<div>
						<img src={ company } width="40" alt="company" />
					</div>
					<div>
						<h5 className="uk-margin-remove uk-text-uppercase"><span>Inkoniq Solutions</span></h5>
						<h5 className="uk-margin-remove uk-text-capitalize"><span>Clients/Projects - Listed Below</span></h5>
					</div>
				</div>

				<div className="uk-grid-small uk-grid-match uk-child-width-1-2" data-uk-grid>
					<div>
						<div className="uk-flex uk-flex-middle">
							<img src={ calendar } className="uk-margin-small-right uk-margin-small-top" alt="calendar" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted uk-margin-medium-right">May 2015 - Oct 2016 <br /> [1 year 6 months]</h6>
						</div>
					</div>
					<div>
						<div className="uk-flex uk-flex-middle uk-flex-right">
							<img src={ position } className="uk-margin-small-right uk-margin-small-top" alt="position" />
							<h6 className="uk-margin-small-top uk-margin-remove-bottom uk-text-muted">Position - Permanent < br/> Role - UI Developer</h6>
						</div>
					</div>
				</div>
			</div>

			<ul className="uk-list uk-list-divider">
				<li>						
					<h5 className="uk-text-bolder uk-margin-remove">Lodgiq</h5>
					<h6 className="uk-margin-remove">It showcases the lowest and highest prices of any room of any hotel for any given day. Hoteliers manage their prices based on data.
					</h6>
				</li>
				<li>						
					<h5 className="uk-text-bolder uk-margin-remove">Sigmoid</h5>
					<h6 className="uk-margin-remove">Big data analytics dashboard created using x &amp; y axis data. Draws the required charts which can be saved, viewed and downloaded.
					</h6>
				</li>
				<li>
					<h5 className="uk-text-bolder uk-margin-remove">Nothing Like Travel</h5>
					<h6 className="uk-margin-remove">Travel portal showcasing different travel destinations, tour packages and reviews. It contains group booking, planned tours and itineraries.
					</h6>
				</li>
				<li>
					<h5 className="uk-text-bolder uk-margin-remove">Zip Rooms [Spree Hotels]</h5>
					<h6 className="uk-margin-remove">Hotel room and facilities booking portal for users. Provides rating and feedback on point of interests and services provided.
					</h6>
				</li>
			</ul>
		</section>
	)
}
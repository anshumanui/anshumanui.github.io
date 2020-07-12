//	Import Declarations
import React from 'react';


//	React Default Exported Functional Component Declaration
export default function Skills () {
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
				<div className="uk-margin-small-right">Skills Set</div>
				<div className="uk-width-expand"></div>		
				<div></div>
			</h3>

			<div className="cv-skills uk-margin-small-top">
				<h6 className="uk-text-bold uk-margin-remove-bottom">Markup | Styling | Preprocessors</h6>
				<ul className="uk-list uk-flex uk-margin-remove-top">
					<li className="uk-margin-small-top">HTML5</li>
					<li>CSS3</li>
					<li>SCSS</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">CSS Frameworks</h6>
				<ul className="uk-list uk-flex uk-margin-remove-top">	
					<li className="uk-margin-small-top">Bootstrap</li>
					<li>Materialize</li>
					<li>UiKit</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">Scripting Languages & Libraries</h6>
				<ul className="uk-list uk-flex uk-margin-remove-top">
					<li className="uk-margin-small-top">Javascript/ES6</li>
					<li>jQuery</li>
					<li>Moment</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">JS Frameworks</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">
					<li className="uk-margin-small-top">React JS</li>
					<li>Angular JS</li>
					<li>Vue JS</li>
					<li>Express JS</li>
					<li>Node JS</li>
					<li>Angular</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">Testing Suites</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">					
					<li className="uk-margin-small-top">JEST</li>
					<li>Jasmine/Karma</li>
				</ul>
			</div>

			<div className="cv-skills cv-lineBreak">
				<h6 className="uk-margin-remove-bottom uk-text-bold">Databases</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">	
					<li className="uk-margin-small-top">Mongo DB</li>
					<li>MySQL</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">Task Runners &amp; Bundlers</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">		
					<li className="uk-margin-small-top">Webpack</li>
					<li>Grunt</li>
					<li>Gulp</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">Maps &amp; Charts</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">			
					<li className="uk-margin-small-top">Google Maps &amp; Charts</li>
					<li>D3.js</li>
					<li>Chart.js</li>
					<li>Fusion Charts</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">CI/CD</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">		
					<li className="uk-margin-small-top">Teamcity</li>
					<li>Jenkins</li>
					<li>Docker</li>
				</ul>
			</div>

			<div className="cv-skills">
				<h6 className="uk-margin-remove-bottom uk-text-bold">Others</h6>
				<ul className="uk-list uk-flex uk-flex-wrap uk-margin-remove-top">	
					<li className="uk-margin-small-top">PWA</li>
					<li>AMP</li>
					<li>Responsive</li>
					<li>UX</li>
					<li>Git</li>
					<li>SVN</li>
					<li>JIRA</li>
					<li>Prototyping</li>
					<li>Adobe Photoshop</li>
					<li>Kanban Board</li>
					<li>REST</li>
					<li>Confluence</li>
					<li>Agile Methodology</li>
					<li>Basecamp</li>
					<li>Invision</li>
				</ul>
			</div>
		</section>
	)
}
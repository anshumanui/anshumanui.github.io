//	Import Declarations
import React from 'react';


//	React Default Exported Functional Component Declaration
export default function Education () {
	/*
		::Package: Builds "education" component
			for resume, contains 10th, 12th 
			and engineering degree info
		::Author: Anshuman Mishra
		::Created on: 18th February, 2020
		::Updated on: 26th February, 2020
	*/

	return (
		<section className="uk-padding-small uk-padding-remove-vertical uk-margin-small-top">
			<h3 className="uk-text-uppercase uk-margin-remove uk-flex uk-flex-middle">
				<div className="uk-margin-small-right">Education</div>
				<div className="uk-width-expand"></div>		
				<div></div>
			</h3>

			<div className="uk-grid-medium uk-child-width-1-2 uk-grid-match" data-uk-grid>
				<div>
					<h4 className="uk-margin-remove">Bachelors in Technology (B.Tech)</h4>
					<h5 className="uk-margin-remove">Computer Science &amp; Engineering</h5>
					<h6 className="uk-margin-remove">Biju Patnaik University of Technology</h6>
					<h6 className="uk-margin-remove uk-text-muted">Odisha, India</h6>
					<h6 className="uk-margin-remove">Secured 7.6/10</h6>
				</div>

				<div>
					<h4 className="uk-margin-remove">High School</h4>
					<h5 className="uk-margin-remove">Kendriya Vidyalaya No.1</h5>
					<h6 className="uk-margin-remove uk-text-muted">Bhubaneswar, India</h6>
					<h6 className="uk-margin-remove">Secured 80.2%</h6>
					<hr />
					<h4 className="uk-margin-remove">School</h4>
					<h5 className="uk-margin-remove">Kendriya Vidyalaya No.1</h5>
					<h6 className="uk-margin-remove uk-text-muted">Bhubaneswar, India</h6>
					<h6 className="uk-margin-remove">Secured 88.2%</h6>
				</div>
			</div>
		</section>
	)
}
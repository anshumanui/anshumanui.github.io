//	Import Declarations
import React from 'react';


//	React Default Exported Functional Component Declaration
export default function References () {
	/*
		::Package: Builds "education" component
			for resume, contains 10th, 12th 
			and engineering degree info
		::Author: Anshuman Mishra
		::Created on: 18th February, 2020
		::Updated on: 26th February, 2020
	*/

	return (
		<section className="uk-padding-small uk-margin-small-top uk-background-muted">
			<h3 className="uk-text-uppercase uk-margin-remove uk-flex uk-flex-middle">
				<div className="uk-margin-small-right">References</div>
				<div className="uk-width-expand"></div>		
				<div></div>
			</h3>

			<ul className="uk-list uk-list-divider uk-margin-remove-bottom">
				<li>
					<h5 className="uk-margin-remove">Raj Rampur</h5>
					<h6 className="uk-margin-remove uk-text-muted">Manager, Western Digital</h6>
					<h6 className="uk-margin-small-top uk-margin-remove-bottom"><a href="mailto: Raj.Rampur@wdc.com">Raj.Rampur@wdc.com</a></h6>
				</li>
				<li>
					<h5 className="uk-margin-remove">Mahendra Sahoo</h5>
					<h6 className="uk-margin-remove uk-text-muted">Vice President, Credit Suisse</h6>
					<h6 className="uk-margin-small-top uk-margin-remove-bottom"><a href="mailto: mahendra.sahoo@credit-suisse.com">mahendra.sahoo@credit-suisse.com</a></h6>
				</li>
				<li>
					<h5 className="uk-margin-remove">Jennifer Fredrikson</h5>
					<h6 className="uk-margin-remove uk-text-muted">Project Manager, Invision</h6>
					<h6 className="uk-margin-small-top uk-margin-remove-bottom"><a href="mailto: jenniferfrederiksen@invisionapp.com">jenniferfrederiksen@invisionapp.com</a></h6>
				</li>
			</ul>
		</section>
	)
}
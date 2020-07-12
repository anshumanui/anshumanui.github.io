//	Import Declarations
import React from 'react';

import '../../assets/scss/profile1.scss';

import Skills from './Skills';


//	React Default Exported Functional Component Declaration
export default function Profile1 () {
	/*
		::Package: Builds "nav" tag used as navigation links for header, 
			passes navigation data,
			and captures "onClick" event from children
		::Author: Anshuman Mishra
		::Created on: 09th February, 2020
		::Updated on: 09th February, 2020
	*/

	return (
		<content className="uk-container uk-container-small">
			<header>
				<div className="uk-grid-collpase" data-uk-grid>
					<div className="uk-width-1-3">
						<div className="cv-background uk-padding-small">
							<h4 className="uk-margin-remove-bottom uk-text-lighter uk-margin-medium-top uk-text-uppercase cv-letter-spacing">Curriculum Vitae</h4>
						</div>
					</div>

					<div className="uk-width-2-3">

					</div>
				</div>

				<h1 className="uk-text-uppercase uk-text-bolder uk-margin-small-top uk-margin-remove-bottom cv-letter-spacing">Anshuman Mishra</h1>
				<h4 className="uk-text-lighter uk-text-bolder uk-margin-remove-top uk-margin-small-bottom uk-text-uppercase cv-letter-spacing">UI/UX Developer</h4>
			</header>

			<div className="uk-grid-collpase" data-uk-grid>
				<div className="uk-width-1-3">
					<Skills />
				</div>

				<div className="uk-width-2-3">

				</div>
			</div>
		</content>
	)
}


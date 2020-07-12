//	Import Declarations
import React from 'react';

import Header from './header';
import WorkExperience from './workExperience';
import References from './references';
import Languages from './languages';
import Education from './education';
import Skills from './skills';
import Footer from './footer';

import '../../assets/scss/profile2.scss';


//	React Default Exported Functional Component Declaration
export default function Profile2 () {
	/*
		::Package: Builds "profile" for resume,
			consists of sub components like
			header for all communication info
			different section of experience
			and education; skills set and
			references and languages
		::Author: Anshuman Mishra
		::Created on: 18th February, 2020
		::Updated on: 26th February, 2020
	*/

	return (
		<content className="uk-container uk-container-small uk-padding-remove cv-profile2">
			<Header />

			<div className="uk-grid-collapse" data-uk-grid>
				<div className="uk-width-3-5">
					<WorkExperience />				
				</div>

				<div className="uk-width-2-5">
					<Education />
					<Skills />
					<References />
					<Languages />
				</div>
			</div>

			<Footer />
		</content>
	)
}


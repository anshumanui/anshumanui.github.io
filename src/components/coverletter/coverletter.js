//	Import Declarations
import React from 'react';

import Header from './header';
import Content from './content';

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
			<Content />
		</content>
	)
}


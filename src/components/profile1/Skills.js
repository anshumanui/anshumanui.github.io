//	Import Declarations
import React from 'react';


//	React Default Exported Functional Component Declaration
export default function Skills () {
	/*
		::Package: Builds "nav" tag used as navigation links for header, 
			passes navigation data,
			and captures "onClick" event from children
		::Author: Anshuman Mishra
		::Created on: 09th February, 2020
		::Updated on: 09th February, 2020
	*/

	return (	
		<section className="uk-padding-small cv-background">
			<h3 className="uk-text-lighter uk-text-uppercase cv-spacing">Skills Set</h3>

			<h6 className="uk-margin-remove-vertical">HTML5</h6>
			<progress max="100" value="95"></progress>

			<h6 className="uk-margin-remove-vertical">CSS3</h6>
			<progress max="100" value="95"></progress>

			<h6 className="uk-margin-remove-vertical">Javascript/ES6</h6>
			<progress max="100" value="85"></progress>

			<h6 className="uk-margin-remove-vertical">jQuery</h6>
			<progress max="100" value="90"></progress>

			<h6 className="uk-margin-remove-vertical">React JS</h6>
			<progress max="100" value="85"></progress>

			<h6 className="uk-margin-remove-vertical">Angular JS</h6>
			<progress max="100" value="80"></progress>

			<h6 className="uk-margin-remove-vertical">Angular</h6>
			<progress max="100" value="50"></progress>

			<h6 className="uk-margin-remove-vertical">SASS/SCSS</h6>
			<progress max="100" value="90"></progress>

			<h6 className="uk-margin-remove-vertical">Vue JS</h6>
			<progress max="100" value="70"></progress>

			<h6 className="uk-margin-remove-vertical">Webpack</h6>
			<progress max="100" value="60"></progress>
		</section>
	)
}
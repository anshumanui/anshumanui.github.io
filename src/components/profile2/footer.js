//	Import Declarations
import React from 'react';

import workout from '../../assets/images/workout.svg';
import music from '../../assets/images/music.svg';
import novels from '../../assets/images/novels.svg';
import travelling from '../../assets/images/travelling.svg';
import trekking from '../../assets/images/trekking.svg';
import cooking from '../../assets/images/cooking.svg';
import ux from '../../assets/images/ux.svg';
import gaming from '../../assets/images/gaming.svg';


//	React Default Exported Functional Component Declaration
export default function Footer () {
	/*
		::Package: Builds "education" component
			for resume, contains 10th, 12th 
			and engineering degree info
		::Author: Anshuman Mishra
		::Created on: 18th February, 2020
		::Updated on: 26th February, 2020
	*/

	return (
		<footer className="uk-padding-small uk-padding-remove-vertical uk-margin-small-top uk-margin-small-bottom">
			<h3 className="uk-text-uppercase uk-margin-remove uk-flex uk-flex-middle">
				<div className="uk-margin-small-right">Interests</div>
				<div className="uk-width-expand"></div>		
				<div></div>
			</h3>

			<ul className="uk-list uk-flex uk-flex-around">
				<li className="uk-text-center">
					<img src={ workout } alt="workout" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Workout<br />&amp; Fitness</h6>
				</li>
				<li className="uk-text-center">
					<img src={ music } alt="music" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Listening<br />to Music</h6>
				</li>
				<li className="uk-text-center">
					<img src={ novels } alt="novels" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Reading<br />Novels</h6>
				</li>
				<li className="uk-text-center">
					<img src={ travelling } alt="travelling" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Travelling<br />around world</h6>
				</li>
				<li className="uk-text-center">
					<img src={ trekking } alt="trekking" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Trekking<br />&amp; Hiking</h6>
				</li>
				<li className="uk-text-center">
					<img src={ ux } alt="ux" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">UX<br />
					Designing</h6>
				</li>
				<li className="uk-text-center">
					<img src={ cooking } alt="cooking" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Cooking<br />Cuisines</h6>
				</li>
				<li className="uk-text-center">
					<img src={ gaming } alt="gaming" />
					<h6 className="uk-text-bold uk-text-uppercase uk-margin-small-top">Video<br />Gaming</h6>
				</li>
			</ul>
		</footer>
	)
}
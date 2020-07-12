//	Import Declarations
import React from 'react';

import profile from '../../assets/images/profile.jpg';

import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/email.svg';
import github from '../../assets/images/github.svg';
import location from '../../assets/images/location.svg';
import skype from '../../assets/images/skype.svg';

import embeddedsystems from '../../assets/images/embeddedsystems.svg';
import banking from '../../assets/images/banking.svg';
import travel from '../../assets/images/travel.svg';
import bigdata from '../../assets/images/bigdata.svg';
import hospitality from '../../assets/images/hospitality.svg';
import education from '../../assets/images/education.svg';


//	React Default Exported Functional Component Declaration
export default function Header () {
	/*
		::Package: Builds "header" for resume,
			consists of all communication info,
			profile pic and work domains info
		::Author: Anshuman Mishra
		::Created on: 18th February, 2020
		::Updated on: 26th February, 2020
	*/

	return (
		<header>
			<div className="uk-grid-collapse uk-child-width-expand" data-uk-grid>
				<div className="uk-padding-small">
					<h4 className="uk-text-lighter uk-text-uppercase uk-margin-remove-top uk-margin-small-bottom cv-letter-spacing">Curriculum Vitae</h4>
					<h1 className="uk-heading-small uk-text-uppercase uk-margin-remove uk-text-bolder cv-heading">Anshuman</h1>
					<h1 className="uk-heading-small uk-text-uppercase uk-margin-remove uk-text-bolder">Mishra</h1>
					<h3 className="uk-text-uppercase uk-margin-small-top cv-roleText"><span>UI/UX Developer</span></h3>

					<ul className="uk-list">
						<li className="uk-flex uk-flex-middle">
							<div className="uk-position-relative uk-margin-small-right">
								<img src={ phone } className="uk-position-center" alt="call" />
							</div>
							<div className="uk-text-small">+91-832-890-5512</div>
						</li>
						<li className="uk-flex uk-flex-middle">
							<div className="uk-position-relative uk-margin-small-right">
								<img src={ email } className="uk-position-center" alt="email" />
							</div>
							<div className="uk-text-small">anshuman.web@gmail.com</div>
						</li>
						<li className="uk-flex uk-flex-middle">
							<div className="uk-position-relative uk-margin-small-right">
								<img src={ github } className="uk-position-center" alt="github" />
							</div>
							<div className="uk-text-small">https://anshumanui.github.io/</div>
						</li>
						<li className="uk-flex uk-flex-middle">
							<div className="uk-position-relative uk-margin-small-right">
								<img src={ skype } className="uk-position-center" alt="skype" />
							</div>
							<div className="uk-text-small">anshuman7771</div>
						</li>
					</ul>
				</div>
				<div>
					<div className="uk-background-muted uk-padding-small">
						<h3 className="uk-text-uppercase uk-flex uk-flex-middle">
							<div className="uk-margin-small-right">Work Domain</div>
							<div className="uk-width-expand"></div>
							<div></div>
						</h3>
						<ul className="uk-list uk-list-divider cv-list-bgWhite uk-margin-remove">
							<li className="uk-flex uk-flex-middle">
								<img src={ travel } className="uk-margin-small-right" alt="travel and tourism" />
								<h6 className="uk-text-small uk-text-uppercase uk-margin-remove">Travel &amp; Tourism</h6>
							</li>
							<li className="uk-flex uk-flex-middle">
								<img src={ banking } className="uk-margin-small-right" alt="finance and banking" />
								<h6 className="uk-text-small uk-text-uppercase uk-margin-remove">Finance &amp; Banking</h6>
							</li>
							<li className="uk-flex uk-flex-middle">
								<img src={ bigdata } className="uk-margin-small-right" alt="big data" />
								<h6 className="uk-text-small uk-text-uppercase uk-margin-remove">Big Data</h6>
							</li>
							<li className="uk-flex uk-flex-middle">
								<img src={ embeddedsystems } className="uk-margin-small-right" alt="embedded systems" />
								<h6 className="uk-text-small uk-text-uppercase uk-margin-remove">Embedded Systems</h6>
							</li>
							<li className="uk-flex uk-flex-middle">
								<img src={ hospitality } className="uk-margin-small-right" alt="hospitality" />
								<h6 className="uk-text-small uk-text-uppercase uk-margin-remove">Hospitality</h6>
							</li>
							<li className="uk-flex uk-flex-middle">
								<img src={ education } className="uk-margin-small-right" alt="educational portals" />
								<h6 className="uk-text-small uk-text-uppercase uk-margin-remove">Education &amp; E-learning</h6>
							</li>
						</ul>
					</div>
				</div>
				<div className="uk-width-auto">
					<figure className="uk-margin-remove uk-inline">
						<img src={ profile } className="cv-profileImgHt" alt="profile pic" />
						<div className="uk-overlay uk-overlay-primary uk-position-bottom cv-overlay uk-padding-small">
			                <h6 className="uk-text-uppercase cv-letter-spacing">
			                	9 Years Work Experience<br />
			                	Team Lead | 32 | Male<br />
			                	Bangalore, India
			                </h6>
			            </div>
					</figure>
				</div>
			</div>
		</header>
	)
}
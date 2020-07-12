import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';
import Profile1 from './components/profile1/profile1';
import Profile2 from './components/profile2/profile2';
import Coverletter from './components/coverletter/coverletter';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';

UIkit.use(Icons);


function App() {
	return (
		<main>
			<Router>
				<Route exact path="/" component={ Dashboard } />
		  		<Route exact path="/Profile1" component={ Profile1 } />
		  		<Route exact path="/Profile2" component={ Profile2 } />
		  		<Route exact path="/Coverletter" component={ Coverletter } />
		  	</Router>
		</main>
	);
}

export default App;

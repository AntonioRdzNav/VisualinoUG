import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './components/routes/HomePage'
import JobIndex from './components/routes/JobIndex'
import JobCreate from './components/routes/JobCreate'
import JobShow from './components/routes/JobShow'
import JobUpdate from './components/routes/JobUpdate'
import Footer from './components/Footer'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
    return(
		<BrowserRouter>
			<div>
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/jobs" exact component={JobIndex} />
					<Route path="/jobs/create" exact component={JobCreate} />	
					<Route path="/jobs/:id/update" component={JobUpdate} />									
					<Route path="/jobs/:id" component={JobShow} />					
					<Redirect path="*" to="/" />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
    )
}

export default App;

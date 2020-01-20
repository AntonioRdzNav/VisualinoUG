import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import JobIndex from './routes/JobIndex'
import JobCreate from './routes/JobCreate'
import JobShow from './routes/JobShow'
import JobUpdate from './routes/JobUpdate'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function WebApp() {
    return(
		<div>				
			<BrowserRouter>		
				<NavBar />			
				<Switch>					
					<Route path="/jobs" exact component={JobIndex} />
					<Route path="/jobs/create" exact component={JobCreate} />	
					<Route path="/jobs/:id/update" component={JobUpdate} />									
					<Route path="/jobs/:id" component={JobShow} />					
					<Redirect path="*" to="/jobs" />					
				</Switch>
				<Footer />						
			</BrowserRouter>				
		</div>			
    )
}

export default WebApp;
	
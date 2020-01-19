import React from 'react'
import HomePage from './routes/HomePage'
import WebApp from './WebApp'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
    return(
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/" component={WebApp} />
				</Switch>
			</div>	
		</BrowserRouter>
    )
}

export default App;

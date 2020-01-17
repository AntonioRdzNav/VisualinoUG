import React from 'react'
import Footer from './components/Footer'
import JobItem from './components/JobTitle'
import Header from './components/Header'
import './App.css';
import jobsData from './jobs.json'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
       jobs: jobsData
    }
  }

  render() {
    const jobComponents = this.state.jobs.map(currentJob => {
      return ( <JobItem key={currentJob._id} job={currentJob}/> )
    })    

    return(
      <div className="App">
        <Header />
        {jobComponents}
        <Footer />
      </div>
    )
  }
}

export default App;

import React from "react"

class JobTitle extends React.Component {
    render(){
        return (
            <div>
                <hr/>
                <h4> {this.props.job.title} </h4>
                <h5> {this.props.job.city} </h5>
                <h6> {this.props.job.employer} </h6>
            </div>
        )
    }
}

export default JobTitle
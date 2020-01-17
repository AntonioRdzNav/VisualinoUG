import React from "react"
import {Link} from 'react-router-dom'

function JobItem(props) {
    return (
        <div>
            <hr/>
            <Link to={`/jobs/${props.job._id}`}>
                <h4> {props.job.title} </h4>            
            </Link>
            <h5> {props.job.city} </h5>
            <h6> {props.job.employer} </h6>
        </div>
    )
}

export default JobItem;
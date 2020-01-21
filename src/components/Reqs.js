import React from "react"

function Reqs(props) {
    if(props.requirements){
        return (
            <div>
                <label className="labTitle">Requirements:</label>
                <ul className="tab">															
                {					
                    props.requirements.map((req, i) => {
                        return(
                            <li  key={i} className="list">
                                {req}
                            </li>	
                        )
                    })
                }
                </ul>										
            </div>
        )
    }
    return(<div></div>)
}

export default Reqs;
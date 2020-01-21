import React from "react"

function Tasks(props) {
    if(props.tasks){
        return (
            <div>
                <label className="labTitle">Tasks:</label>
                <ul className="tab">															
                {					
                    props.tasks.map((task, i) => {
                        return(
                            <li  key={i} className="list">
                                {task}
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

export default Tasks;
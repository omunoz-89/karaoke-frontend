import React, {useEffect, useState} from 'react'

const Results = (props) => {
    
    console.log(props)
    let results = props.results.data.items
    const resultsList = results.map((r, idx) => {
       return <h2 key={idx}>{r.snippet.title}</h2>
    })

    return(
        <div>
            {resultsList}
        </div>
    )
}

export default Results
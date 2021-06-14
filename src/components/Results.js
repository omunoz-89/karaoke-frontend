import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Results = (props) => {
    
    console.log(props)
    let results = props.results.data.items
    const resultsList = results.map((r, idx) => {
       return <div className="resultsDiv">
        <Link to= {`/record/${r.id.videoId}`} params={{ video: r.id.videoId }}>
           <img src={r.snippet.thumbnails.medium.url} alt={r.snippet.title} />
       <h5 key={idx}>{r.snippet.title}</h5>
       </Link>
       <hr />
       </div>
    })

    return(
        <div>
            {resultsList}
        </div>
    )
}

export default Results
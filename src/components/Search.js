import React, {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom";
import Results from './Results'

import axios from 'axios'

const Search = (props) => {
    const [results, setResults] = useState([])
    const KEY = process.env.REACT_APP_API_KEY
    const searchKaraoke = async (e) => {
        e.preventDefault()
        const song = e.target.song.value
        const artist = e.target.artist.value
        const ytResults = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=25&order=relevance&q=${song}%20${artist}%20karaoke&key=${KEY}`)
        setResults(ytResults)
        // if (ytResults) return <Redirect to='/search/results' results={results} />
    }

    useEffect(() => {
        console.log(results)
    }, [results])
    
     if (results.length === 0) { return(
        <div className="searchDiv">
            <form className="searchForm" onSubmit={searchKaraoke}>
                <label htmlFor="song">Song:</label>
                <input type="text" name="song" required/>
                <label htmlFor="artist">Artist:</label>
                <input type="text" name="artist" required/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
     } else {
        return <Results results={results} />
    }
    
}

export default Search
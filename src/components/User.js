import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const User = (props) => {
    const [user, setUser] = useState()
    const [videos, setVideos] = useState()
    const [videoList, setVideoList] = useState()
    const CONNECTION_URI = process.env.REACT_APP_SERVER_URL

    const fetchUser = async () => {
        const resp = await fetch(CONNECTION_URI+`/api/users/${props.match.params.id}`)
        const respJSON = await resp.json()
        setUser(respJSON)
        setVideos(respJSON.videos)
        if(videos === null){
            setVideoList('You have no recorded videos')
        } else {
        const videoList = await respJSON.videos.map((vid, idx) => {
            setVideoList(
                <div className="col-3">
            <div key={idx} className="card">
            <a href={window.location.origin+`/videos/${vid._id}`}><img className='cardImg' src={vid.thumbnail} alt={vid.title} /></a>
              <div className="card-body">
                <h6 className="card-title">{vid.title}</h6>
                <p className="card-text">Desc: {vid.description}</p>
                <p className="card-text">Likes: {vid.likes}</p>
              </div>
            </div>
          </div>
                )
            
        })
    }
    }
    useEffect(()=> {
        fetchUser()
    }, [])

    return(
        <div>
        <h1>User Page</h1>
        {videoList}
        </div>
    )
}

export default User
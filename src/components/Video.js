import React, {useState, useEffect} from 'react'

const Video = (props) => {
    const [video, setVideo] = useState({})
    const [comments, setComments] = useState([])

    // const commentList = this.comments.map((item,idx) => {
    //     return <li key={idx}>{item}</li>
    // })


    const CONNECTION_URI = process.env.REACT_APP_SERVER_URL
    const fetchVideo = async () => {
        const resp = await fetch(CONNECTION_URI+`/api/videos/${props.match.params.id}`)
        const respJSON = await resp.json()
        setVideo(respJSON)
    }

    const fetchComments = async () => {
        // setComments(video.comments)
    }

    useEffect(()=> {
        fetchVideo()
        console.log('In fetch video')
    }, [])

    useEffect(()=> {
        fetchComments()
    }, [video])

console.log(video)


    return(

        <div>
        <h1>{video.title}</h1>
        <ul>
        </ul>
        </div>
    )
}

export default Video

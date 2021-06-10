import React, {useState, useEffect} from 'react'

const Video = (props) => {
    const [video, setVideo] = useState({})
    const [comments, setComments] = useState([])

    const CONNECTION_URI = process.env.REACT_APP_SERVER_URL
    
    const fetchVideo = async () => {
        const resp = await fetch(CONNECTION_URI+`/api/videos/${props.match.params.id}`)
        const respJSON = await resp.json()
        setVideo(respJSON)
    }

    const fetchComment = async () => {
        let commentArray =[]
        const allComments = video.comments.map( async (c) => {
            const resp = await fetch(CONNECTION_URI+`/api/comments/${c}`)
            const respJSON = await resp.json()
            commentArray.push(respJSON)
            return respJSON           
        })
        setComments(commentArray)
    }
    
    // let allComments = video.comments.map((c, idx)=> {
    //     return <li key={idx}>{c.content}</li>
    // })

    // const userVideos = user.videos.map((v, idx) => {
    //     return <a href={v.url}
    // })

    useEffect(()=> {
        // fetchVideo()
        console.log(CONNECTION_URI)
        
    }, [])

    useEffect(()=> {
        // fetchComment()
        
    }, [video])


    return(
        <div>
           <h1> Video Page </h1>
            <p>{video.description}</p>
            {/* <ul>{allComments}</ul> */}
            </div>

    )
}

export default Video
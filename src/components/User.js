import React, {useState, useEffect} from 'react'

const User = (props) => {
    const [user, setUser] = useState({})

    const CONNECTION_URI = process.env.REACT_APP_SERVER_URL

    const fetchUser = async () => {
        const resp = await fetch(CONNECTION_URI+`/api/users/${props.match.params.id}`)
        const respJSON = await resp.json()
        setUser(respJSON)
    }

    // const userVideos = user.videos.map((v, idx) => {
    //     return <a href={v.url}
    // })

    useEffect(()=> {
        fetchUser()
    }, [])
        

    console.log('User props: ', props)
    return(
        <div>
        <h1>User Page</h1>
        <h2>{user.name}</h2>
        </div>
    )
}

export default User
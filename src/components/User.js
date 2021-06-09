import React, {useState, useEffect} from 'react'

const User = (props) => {
    // let user = props.user

    const fetchThisUser = () => {
        User.findOne({_id = props.match.params.id})
    }

    useEffect(()=> {
        props.reload()
    }, [])
        

    // console.log(props)
    return(
        <div>
        <h1>User Page</h1>
        <h2>{props.user.name}</h2>
        </div>
    )
}

export default User
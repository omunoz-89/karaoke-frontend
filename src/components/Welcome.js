import React from 'react';
import Search from './Search'

const Welcome = () => {
    return (
        <div>
            <h1 className="welcomeText">Welcome</h1>
            <img className="mic" src="https://res.cloudinary.com/sei412-om/image/upload/v1623440005/mic_pmdu7o.png"/>
            {/* <h1>Welcome</h1> */}
            <Search />
        </div>
    )
}

export default Welcome;
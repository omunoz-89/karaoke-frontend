import React, {useEffect, useState} from 'react'

const Record = (props) => {

    console.log(props)
    
    // useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "//cameratag.com/api/v14/js/cameratag.min.js";
    //     script.async = true;
    //     script.type = 'text/javascript';
      
    //     document.body.appendChild(script);
    // }
    return(
        <div>
            <camera data-app-id='a-1433fe10-ac5b-0139-42d3-0aac5b511429' id='myCamera' data-maxlength='420'></camera>
        </div>
    )
}

export default Record
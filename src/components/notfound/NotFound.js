import React from 'react'
import './NotFound.css'
import {Link} from 'react-router-dom'

const NotFound=()=>{

    return (
        <div className='NotFound'> 
            <h1 className='NotFound-title'>Sorry but page not found 4004 </h1>
            <Link  className='NotFound-link' to='/'>
            Back To Home
            </Link>
        </div>
    )

}

export default NotFound
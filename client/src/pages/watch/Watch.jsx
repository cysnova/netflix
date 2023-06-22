import React from 'react'
import './watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'
import video from '../../assets/eg.mp4'
import { Link,useLocation } from 'react-router-dom'

const Watch = () => {
   const location = useLocation();
   console.log(location)
   const {movie} = location.state;
   
  return (
    <div className='watch'>
      <Link to ="/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        </Link>
        <div className='videoWrapper'> 
          <iframe width="560" height="315" src={movie.video} frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Watch
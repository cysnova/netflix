import React, { useEffect,useState } from 'react'
import './listItem.scss'
import { PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import axios from 'axios'

const ListItem = ({index,item}) => {

  const [isHovered,setIsHovered] = useState(false);
  const [movie,setMovie] = useState({});
  
 useEffect(()=>{
  const getMovie = async ()=>{
    try {
      const res = await axios.get("/api/movies/find/"+item,{
        headers: {
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTIxYmEyOTYyNDNjM2I3ZTMyYTU3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODM1Nzg2NywiZXhwIjoxNjg4Nzg5ODY3fQ.N7jx4yr2bxHh6U8OkwN7OrKlmvYk7797hqJFJva7TC8",
        },
       });
       setMovie(res.data);
    } catch (err) {
      console.log(err)
    }
  };
  getMovie()
 },[item]);
  return (
    <Link to="/watch" state={{movie:movie}}>
    <div
    className="listItem"
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img
      src={movie.img}
      alt=""
    />
    {isHovered && (
      <>
      <video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpAltOutlined className='icon'/>
            <ThumbDownOutlined className='icon'/>
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className='limit'>{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
            {movie.desc}
          </div>
          <div className="genre">{movie.genre}</div>
        </div>
      </>
    )}
    
    </div>
    </Link>
  )
}

export default ListItem
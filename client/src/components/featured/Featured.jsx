import React from 'react'
import './featured.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movies' ? 'Movies':'Series'}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>    
            </div>
        )}
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="" />
        <div className="info">
            <img src="https://cdn1.ftimg.com/images/logos/big/en_US/matrix-logo.png"
            alt="" />
            <span className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae, rerum alias quasi iste voluptatum dolorum id consequatur cumque dolore?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
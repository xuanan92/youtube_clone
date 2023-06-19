import { Avatar } from '@mui/material'
import "./VideoCard.css"
import React from 'react'

export default function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="thumbnail" />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt={channel}
          src={channelImage}
        />
        <div classname="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'

export default function ChannelRow({ image, channel, verified, subs, noOfVides, description }) {
  return (
    <div className='channelRow'>
      <Avatar
        className='channelRow__logo'
        alt={channel}
        src={image}
      />
      <div className="channelRow__text">
        <h4>{channel} {verified && <VerifiedIcon />}</h4>
        <p>{subs} subscribers * {noOfVides} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

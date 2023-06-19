import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import React from 'react'
import ChannelRow from './ChannelRow'
import "./SearchPage.css"
import VideoRow from './VideoRow'

export default function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AGIKgqN8GgrkGaaRTY5ekdsoAALXvJQaMzGP71b4RTjmJQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVides={382}
        description="You can find awesome programming projects"
      />
      <hr />
      <VideoRow />
    </div>
  )
}

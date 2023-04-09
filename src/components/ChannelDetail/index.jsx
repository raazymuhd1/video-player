import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import ChannelCard from "../ChannelCard"
import Videos from "../Videos"
import { fetchApi } from '../../utils/api'

const ChannelDetail = () => {
    const { id } = useParams()
   const [channelDetail, setChannelDetail] = useState(null);
   const [videos, setVideos] = useState([])

   useEffect(() => {
      fetchApi(`channels?part=snippet&id=${id}`)
      .then(data => {
        setChannelDetail(data?.items[0])
      })
      
      fetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => {
        setVideos(data)
      })
   }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{ 
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,59,47,1) 20%, rgba(218,28,83,1) 50%, rgba(0,212,255,1) 86%)",
            zIndex: 10,
            height: "300px"
            }}
        />
        <ChannelCard channel={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2" >
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
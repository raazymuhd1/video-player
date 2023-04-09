import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { 
    demoThumbnailUrl, 
    demoChannelUrl, 
    demoVideoUrl , 
    demoChannelTitle, 
    demoVideoTitle, 
    demoProfilePicture
} from '../../constants'

const VideoCard = ({video: { id: { videoId }, snippet }}) => {

  return (
    <Card sx={{ width: { md: "355px", xs: "100%" } }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
                 alt={snippet?.title}
                 sx={{ width: "100%", height: 180, objectFit: "contain" }}    
                />
        </Link>
        <CardContent sx={{ backgroundColor: "#000" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
                    { snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) } ..
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    { snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60) }
                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
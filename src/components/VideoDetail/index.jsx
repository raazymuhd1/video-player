import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import ReactPlayer from "react-player"
import { Stack, Typography, Box } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { fetchApi } from "../../utils/api"
import Videos from "../Videos"

const VideoDetail = () => {
     const { id } = useParams()
     const [videoDetail, setVideoDetail] = useState(null)
     const [relatedVideo, setRelatedVideo] = useState([])

     useEffect(() => {
        fetchApi(`videos?part=snippet,statistics&id=${id}`)
        .then(data => setVideoDetail(data))

        fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then(data => setRelatedVideo(data))
     }, [id])

  return (
    <Box minHeight="100vh">
       <Stack direction={{ xs: 'column', md: "row" }}>
          <Box flex={1.4}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}> 
                <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${id}`}
                    className="react-player" controls // 
                 />
                 <Typography px={1} color="#fff" variant="h5" fontWeight="bold" p="2">
                     { videoDetail?.items[0]?.snippet?.title }
                 </Typography>
                 <Stack direction="row" justifyContent="space-between" py={1} px={2} sx={{ color: "#fff" }} >
                    <Link to={`/channel/${videoDetail?.items[0]?.snippet?.channelId}`}>
                        <Typography color="#fff" variant={{ sm: "subtitle1", md: "h6"  }}>
                            { videoDetail?.items[0]?.snippet?.channelTitle }
                            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                        </Typography>
                    </Link>
                    <Stack direction="row" alignItems="center" gap="20px">
                       <Typography variant="body1" sx={{ opacity: 0.7 }}>
                            { parseInt(videoDetail?.items[0]?.statistics?.viewCount).toLocaleString() } Views
                       </Typography>
                       <Typography variant="body1" sx={{ opacity: 0.7 }}>
                            { parseInt(videoDetail?.items[0]?.statistics?.likeCount).toLocaleString() } Likes
                       </Typography>
                    </Stack>
                 </Stack>
            </Box>
          </Box>

          <Box px={2} py={{ xs: 5, md: 1 }} justifyContent="center" alignItems="center" >
              <Videos videos={relatedVideo} direction="column" />
          </Box>
       </Stack>
    </Box>
  )
}

export default VideoDetail
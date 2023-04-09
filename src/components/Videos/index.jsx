import { Stack, Box } from "@mui/material"
import VideoCard from "../VideoCard"
import ChannelCard from "../ChannelCard"

const Videos = ({videos, direction}) => {

   if(!videos) return "Loading videos .."

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        { videos?.items?.map((item, index) => (
           <Box key={index}>
              { item?.id?.videoId && <VideoCard video={item} /> }
              { item?.id?.channelId && <ChannelCard channel={item} /> }
           </Box>
        )) 
        }
    </Stack>
  )
}

export default Videos
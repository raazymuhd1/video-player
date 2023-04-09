import { useState, useEffect } from "react"
import { Typography, Box, Stack } from "@mui/material"
import Sidebar from "../Sidebar"
import Videos from "../Videos"

import { fetchApi } from "../../utils/api"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
    .then(res => {
      setVideos(res)
    })
    .catch(err => console.log(err))

  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
        <Box sx={{ height: { sx: "auto", md: "90vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <Sidebar 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}  
            />
           <Typography className="copyright" variant="body2" sx={{ mt: 0.5, color: "#fff" }}>
               2023 Raazy Devs Copyright
           </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
           <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }} >
              {selectedCategory} <span style={{ color: "#F31503" }}> Videos </span>
           </Typography>
           <Videos videos={videos} />
        </Box>
    </Stack>
  )
}

export default Feed
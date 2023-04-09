import { useState, useEffect } from "react"
import { Typography, Box } from "@mui/material"
import Videos from "../Videos"

import { useParams } from "react-router-dom"

import { fetchApi } from "../../utils/api"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then(res => setVideos(res))
    .catch(err => console.log(err))

  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }} >
      Search Result For: <span style={{ color: "#F31503" }}> {searchTerm} </span>
    </Typography>

    <Videos videos={videos} />
 </Box>
  )
}

export default SearchFeed
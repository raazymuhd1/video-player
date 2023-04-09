import { Stack } from "@mui/material"
import { categories } from "../../constants"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <Stack direction="row" 
        sx={{ overflowX: "auto", height: { sx: 0, md: "95%" }, flexDirection: { md: "column" } }} >
        { categories.map(category => (
            <button key={category.name} className="category-btn"
                style={{ backgroundColor: category.name === selectedCategory && "#FC1503", color: "#fff"  }}
                onClick={() => setSelectedCategory(category.name)}
            >
                <span style={{ color: selectedCategory === category.name ? "white" : "red", marginRight: "15px" }} > {category.icon} </span>
                <span style={{ opacity: selectedCategory === category.name ? "1" : "0.8" }}> {category.name} </span>
            </button>
        )) }
    </Stack>
  )
}

export default Sidebar
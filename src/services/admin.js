import api from "configs/api"

const addcategory=(data)=>api.post("/category",data)
const getcategory=(data)=>api.get("/category")
export { addcategory,getcategory}
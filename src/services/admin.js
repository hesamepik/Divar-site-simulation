import api from "configs/api"

const addcategory=(data)=>api.post("/category",data)

export default addcategory
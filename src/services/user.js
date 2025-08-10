import api from "configs/api.js"
import { getCookie } from "utils/cookie"
const token=getCookie("accessToken")

const getprofile=()=>{
    
  const res=api.get("/user/whoami").then((res)=>res||false)
    return res
}

const getpost=()=>{
return api.get("/post/my")
}

const deletpost=()=>{
  return api.post("/delete")
  }
export {getprofile,getpost,deletpost}
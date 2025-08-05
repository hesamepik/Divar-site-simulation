import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { getnewtoken } from "services/token";
const api = axios.create({
  baseURL:"http://localhost:3400" ,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request)=>{

 const accessToken=getCookie("accessToken")
 if(accessToken){
request.headers["Authorization"]=`Bearer ${accessToken}`

 }
 return request


}, (error)=>{

  return Promise.reject(error)
})










api.interceptors.response.use(
  (response) =>{return response},
  async(error)=>{
    const orginalrequest=error.config
    if (error.response.status===401&& !orginalrequest._retry){

      orginalrequest._retry=true
      const res = await getnewtoken()
      if(!res?.response)return
      setCookie(res.response.data)
      console.log(res ,"2")
      return api(orginalrequest)
    }
    
  }
  
 
);
 

export default api
import axios from "axios"
import api from "../configs/api.js";

const sendOtp=async(mobile)=>{

    try {
        const res = await api.post("/auth/send-otp",{mobile});
        return {res} 
      } catch (error) {
        console.error("خطا در ارسال کد OTP:", error);
        throw error; 
      }
} 

const checkOto = async (mobile,code)=>{
try {
  const res=await api.post("/auth/check-otp",{mobile,code})
  return {res}

} catch (error) {
  return {error}
}


}

export {sendOtp , checkOto}


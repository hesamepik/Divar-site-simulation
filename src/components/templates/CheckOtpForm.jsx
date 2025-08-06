import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { checkOto } from "services/ayth.js"
import {setCookie} from "utils/cookie.js"
import { getprofile } from 'services/user'
import styles from "../templates/CheckOtp.module.css"

function CheckOtpForm({code,setcode,setStep,mobile,setmobile}) {
  const navigate=useNavigate()
  const {refetch}= useQuery(["profile"],getprofile)
  const submithandeler= async ()=>{
    event.preventDefault()
    console.log(code, mobile)
    if(code.length!==5) {
alert("کد غلطه")
    }
    const {res,error}= await checkOto(mobile,code)
    console.log(res,"ریسالت")

    if(res){alert("ورود با موفقیت انجام شد ")

      setCookie(res.data)
      navigate("/")
      refetch()

    }
    else
    {alert("کد ناهماهنگ است ")}


  }
  return (
   <>
   <form onSubmit={submithandeler} className={styles.form}>
<p> تایید کد اس ام اس شده </p>
<span>کد را وارد کنید {mobile} کد پیامک شده به شماره </span>

<label htmlFor='input'> کد تایید را وارد کنید </label>
<input type="text" id="input" placeholder='کد تایید '  value={code} onChange={(e)=>setcode(e.target.value)}/>
<button type='submit'> ورود   </button>
<button type='submit' onClick={()=>{setStep(1)}} className={styles.backbutton}> ویرایش شماره   </button>
   </form>
   
   
   </>
  )
}

export default CheckOtpForm
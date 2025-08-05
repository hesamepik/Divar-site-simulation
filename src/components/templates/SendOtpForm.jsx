import React from 'react'
import {sendOtp} from "services/ayth.js"
console.log(document.cookie)

function SendOtpForm({mobile,setmobile,setStep}) {


  const submithandeler = async (event) =>{console.log(event)
    event.preventDefault()
if (mobile.length!==11)return

const {res,error}=await sendOtp(mobile)
if (res) setStep(2)

  }
  return (
<form onSubmit={submithandeler}>
<p>ورود به حساب کاربری</p>
<span>
  برای استفاده از امکانات دیوار لطفا شماره مبایل خود را وارد کنید .کد تایید به این شماره پیامک خواهد شد 
</span>
<label htmlFor='input'> شماره مبایل خود را وارد کنید </label>
<input type='text' id='input' placeholder='شماره مبایل ' value={mobile} onChange={(e)=>setmobile(e.target.value)}/> 

<button  type='submit'>ارسال </button>
</form>
  )
}

export default SendOtpForm
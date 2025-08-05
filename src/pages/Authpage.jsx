import React from 'react'
import CheckOtpForm from '../components/templates/CheckOtpForm';
import SendOtpForm from '../components/templates/SendOtpForm';
import { useState } from 'react';

function Authpage() {
    const [step, setStep] = useState(1);
    const [mobile, setmobile] = useState("");
    const [code, setcode] = useState("");
  return (
    <>
    {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setmobile={setmobile} />}
    {step === 2 && <CheckOtpForm  code={code}  setcode={setcode}  mobile={mobile} setmobile={setmobile} setStep={setStep} />}

    </>
  )
}

export default Authpage
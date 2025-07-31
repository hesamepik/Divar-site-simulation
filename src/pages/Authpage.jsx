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
    {step === 1 && <SendOtpForm />}
    {step === 2 && <CheckOtpForm />}
    <div>Authpage</div>
    </>
  )
}

export default Authpage
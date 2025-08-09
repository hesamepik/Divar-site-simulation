import React from 'react'
import Categoryform from '../components/templates/Categoryform'
import Categorylist from '../components/templates/Categorylist'

function Adminpage() {
  return (
    <div>
      
      <Categorylist/>
      <Categoryform/>
    </div>
  )
}

export default Adminpage
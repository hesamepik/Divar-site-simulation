import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Homepage from 'pages/Homepage'
import Dashboard from 'pages/Dashboard'
import Adminpage from 'pages/Adminpage'
import Authpage from 'pages/Authpage'
import Pagenotfund from 'pages/404'
import { Route, Routes } from 'react-router-dom'
import {getprofile} from "services/user"

function Router() {
const {data,isLoading,error}= useQuery(["profile"],getprofile)
  console.log({data, isLoading,error})

  return (
  <Routes>

<Route path="/" element={<Homepage/>}/>
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/adminpahe" element={<Adminpage/>} />
<Route path="/authpage" element={<Authpage/>} />
<Route path="/*" element={<Pagenotfund/>} />
  </Routes>
  )
}

export default Router
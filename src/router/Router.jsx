import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Homepage from 'pages/Homepage'
import Dashboard from 'pages/Dashboard'
import Adminpage from 'pages/Adminpage'
import Authpage from 'pages/Authpage'
import Pagenotfund from 'pages/404'
import { Navigate, Route, Routes } from 'react-router-dom'
import {getprofile} from "services/user"
import Loader from '../components/module/Loader'



function Router() {

const {data,isLoading,error}= useQuery(["profile"],getprofile)
if(isLoading) return <Loader/>
  console.log({data, isLoading,error})

  return (
  <Routes>

<Route path="/" element={<Homepage/>}/>
<Route path="/dashboard" element={data ? <Dashboard/> : <Navigate to ="/authpage"/>} />
<Route path="/admin" element={data && data.data.role==="ADMIN"?<Adminpage/>: <Navigate to="/"/>  } />
<Route path="/authpage" element={data?<Navigate to="/dashboard" />:<Authpage/>} />
<Route path="/*" element={<Pagenotfund/>} />
  </Routes>
  )
}

export default Router
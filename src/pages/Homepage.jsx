import React from 'react'
import Sidebar from '../components/templates/Sidebar'
import Main from '../components/templates/Main'
import { useQuery } from '@tanstack/react-query'
import { getallpost } from '../services/user'
import Loader from '../components/module/Loader'
const style={display:"flex"}
function Homepage() {
  const {data, isLoading}=useQuery(["post-lsit"],getallpost)
  console.log("allpost",data)
  return (
   <>
      {isLoading?<Loader/>:( <div style={style}>
<Sidebar/>
<Main post={data}/>
</div>)}
   </>
  )
}

export default Homepage
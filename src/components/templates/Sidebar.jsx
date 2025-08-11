import React from 'react'
import { getcategory } from '../../services/admin'
import { useQuery } from '@tanstack/react-query'

function Sidebar() {
    const {data}=useQuery(["get-category"],getcategory)
    console.log(data)
  return (
    <div>
<h4>دسته بندی ها</h4>

<ul>

{data?.data.map((cat)=>(
<li key={cat._id}>  
<img src={`${cat.icon}.svg`} alt="" />
<p>{cat.name}</p>
</li>



))}

</ul>
    </div>
  )
}

export default Sidebar
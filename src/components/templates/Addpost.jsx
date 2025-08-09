import React, { useState } from 'react'
import { getcategory } from '../../services/admin'
import { useQuery } from '@tanstack/react-query'
import styles from "../templates/Addpost.module.css"

function Addpost() {
    const [form, setform ]=useState({
title:"",
content:"",
category:"",
amount:"null",
city:"",
images:"null"
    })
    const {data}=useQuery(["get-category"],getcategory)

    const chanehand =(event)=>{
const name =event.target.name
if(name!=="images"){
setform({...form,[name]:event.target.value})
}else{
  setform({...form,[name]:event.target.files[0]})
  console.log(event.target.files[0])
}
    }

    const addhandeler=(event)=>{
event.preventDefault()
console.log(form)
    }
  return (
<form onChange={chanehand} className={styles.form}>
<h3>افزودن اگهی</h3>
<label htmlFor='title'>عنوان اگهی</label>
<input type="text" name='title' id='title' />

<label htmlFor='title'>توضیحات  </label>
<textarea name='content' id='content'/>


<label htmlFor='amount'>قیمت</label>
<input type="text" name='amount' id='title' />



<label htmlFor='city'> شهر</label>
<input type="text" name='city' id='city' />

<label htmlFor='category'> دسته بندی </label>
<select name='category' id='category' >

{data?.data.map (i=><option key={i._id} value={i._id}>{i.name}</option>)}
</select>

<label htmlFor='images'> شهر</label>
<input type="file" name='images' id='images' />
<button onClick={addhandeler} >ایجاد</button>
</form>
  )
}

export default Addpost
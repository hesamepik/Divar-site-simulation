import React, { useState } from 'react'
import sytles from "../templates/Categoryform.module.css"
import { useMutation,useQueryClient } from '@tanstack/react-query'
import {addcategory} from '../../services/admin'
function Categoryform() {
const queryclient=useQueryClient()
    const [form , setform]=useState({name:"",slug:"",icon:""})

    const {mutate,isLoading,error,data}=useMutation(addcategory,{
      onSuccess:()=>queryclient.invalidateQueries("get-category")
    })



    const chanehand =(event)=>{
setform({...form,[event.target.name]:event.target.value})
    }

const submithand=(event)=>{
event.preventDefault()
if(!form.slug||!form.name||!form.icon)return

mutate(form)
console.log(isLoading,error,data)
}

  return (
<form onChange={chanehand} onSubmit={submithand} className={sytles.form}> 
    {data?.status===200||data?.status===201&&<p>کتگوری با موفقیت ساخته شد </p> }
<h3>دسته بندی </h3>
<label htmlFor='name'>اسم دسته بندی </label>
<input type='text' name='name' id='name'></input>

<label htmlFor='name'>اسلاگ</label>
<input type='text' name='slug' id='name'></input>

<label htmlFor='name'>ایکون </label>
<input type='text' name='icon' id='name'></input>

<button type='submit'>ایجاد</button>


</form>   
  )
}

export default Categoryform
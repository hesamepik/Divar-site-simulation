import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import {getcategory} from "../../services/admin.js"
import Loader from '../module/Loader.jsx'
import styles from "../templates/Categorylist.module.css"
function Categorylist() {
    const {data, isLoading}=useQuery(["get-category"],getcategory)
    console.log(data)
  return (
    <div className={styles.list}>
{isLoading ?<Loader/> :(data.data.map((i)=> <div key={i.id}> 
    <img src={`${i.icon}.svg`}/>
    
    <h5>{i.name}</h5>
    <p>slug:{i.slug}</p>
     </div>))}

    </div>
  )
}

export default Categorylist
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import { deleteCookie, getCookie, setCookie } from '../utils/cookie';
import { useQuery } from '@tanstack/react-query';
import {getprofile} from "../services/user"
function Header() {
  const [showDetails, setShowDetails] = useState(false);
  const {refetch}= useQuery(["profile"],getprofile)
  const clickhadn=()=>{
    setShowDetails(!showDetails)
    console.log(showDetails)
  }

 const deletehadn=(event)=>{
  deleteCookie("accessToken")
  deleteCookie("refreshToken")
  event.preventDefault()
  refetch()
 }
  return (
    <header className={styles.header}>
<div>
<Link to="/">
<img src='divar.svg' className={styles.logo}/>
</Link>
<span> 
<img src='location.svg' />
<p>مشهد</p>

</span>
</div>
<div>
    <Link to="">
    <span  onClick={clickhadn}>
        <img src='profile.svg'/>
        <p>دیوار من </p>
    </span>
    </Link>

  
    <Link to="/dashboard" className={styles.button}>ثبت اگهی</Link>
</div>

{showDetails && (
        <div className={styles.detailsMenu}> 
          <p onClick={deletehadn}>خروج از حساب </p>
          <p>رفتن به صفحه اصلی</p>
          <p>رفتن به صفحه پست ها</p>
        </div>
      )}

    </header>
  )
}

export default Header
import React from 'react'
import styles from "./Main.module.css"
function Main({post}) {
  return (
    <div className={styles.container}>

{post?.data?.posts.map((post)=>(
<div key={post._id} className={styles.cart}>
<div className={styles.info}>
<p>{post.options?.title}</p>
<div>
 
</div>
<p>{post?.amount}</p>
<p>{post.options?.city}</p>
</div>
<img src={`http://localhost:3400/${post.images[0]}`} alt="" />
</div>



))}

    </div>
  )
}

export default Main
import React from 'react'
import Addpost from 'components/templates/Addpost'
import Postlist from 'components/templates/Postlist'

function Dashboard() {
  return (
    <div>

      <Addpost/>
      <Postlist/>
    </div>
  )
}

export default Dashboard
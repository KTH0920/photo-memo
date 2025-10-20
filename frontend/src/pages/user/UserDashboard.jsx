import React from 'react'
import FIleList from './FIleList'
import UploadForm from './UploadForm'

const userDashboard = () => {
  return (
    <section>
        <UploadForm/>
        <FIleList/>
    </section>
  )
}

export default userDashboard
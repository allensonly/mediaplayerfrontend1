import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Homepage() {

// create state to do state-lifting

 const [uploadVidoeStatus,setUploadVideoStatus] = useState({})



  return (
   <>

<div className='container mt-5 d-flex justify-content-between align-items-center'>
      <div className='add_videos'>
        <Add setUploadVideoStatus = {setUploadVideoStatus}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoraion:'none',color:'white',fontSize:'30px'}}>Watch History</Link>
    </div>

    <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
      <div className='all-videos '>
        <h4 > All Videos</h4>
        <View uploadVidoeStatus= {uploadVidoeStatus}/>
      </div>

      
    </div>

   </>

  )
}

export default Homepage
import React, { useEffect, useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import Videocard from './Videocard';
import { getAllvideo } from '../services/allAPI';


function View({uploadVidoeStatus}) {

  const [deleteVideoStatus,setDeleteVideoStatus] =useState(false)

  const [allvideo,setAllvideo] = useState([])

   const getAlluploadedVideos = async() =>{
    const response = await getAllvideo()
    //console.log(response);

    const{data} =response
    //console.log(data);
    setAllvideo(data)
   }
   //console.log(setAllvideo);

   useEffect(() => {
    setDeleteVideoStatus(false)
    getAlluploadedVideos()
   },[uploadVidoeStatus,deleteVideoStatus])


  return (
   <>

   <Row className='mt-5'>

    {allvideo.length >0?

    allvideo?.map((video) =>(  <Col sm={12} md={6} lg={4} xl={3}>

      <Videocard displayVideo = {video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      
      </Col>))
      
    :
    <p>Nothing to display</p>
    
  }
    

   </Row>
   
   </>
  )
}

export default View
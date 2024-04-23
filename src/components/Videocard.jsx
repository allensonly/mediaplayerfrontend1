import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allAPI';
//import { eventManager } from 'react-toastify/dist/core';



function Videocard({displayVideo, setDeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async() => {
    setShow(true);


    const {caption,embedLink}  = displayVideo
    const today = new Date
    //onsole.log(today);

    let timeStamp = new Intl.DateTimeFormat (('en-US') , {
      year:'numeric',
      day : '2-digit',
      hour : '2-digit',
      minute : '2-digit',
      second : '2-digit',



    }).format(today)

    console.log(timeStamp); 

    let videoDetails = {
      caption:caption,
      embedLink:embedLink,
      timeStamp:timeStamp
    }
    await addToHistory(videoDetails)
  
  }

 




  const removeVideo = async(id) =>{
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }



  return (
    <>
    
    <Card  >
      <Card.Img variant="top" onClick={handleShow} src={displayVideo.url} style={{width:'100%', height:'250px'}} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          
          <h6>{displayVideo.caption}</h6>

          <button onClick={() => removeVideo(displayVideo?.id)} className='btn btn-danger'>
          <i class="fa-solid fa-trash fa-xs"></i>
          </button>

        </Card.Title>
        
      </Card.Body>
    </Card>


    <Modal show={show}  onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                 
        <iframe width="100%" height="550" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>

  

    </>
  )
}

export default Videocard
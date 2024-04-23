import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setUploadVideoStatus}) {

// making the state value none
  const [video, setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  /* console.log(video); */

  const embededvideoLink = (e) => {
    const {value} = e.target
    //console.log(value.slice(-11));

    const link = `https://www.youtube.com/embed/${value.slice(-11)}`

    setVideo({...video,embedLink:link})

  }

  const handleupload =  async () =>{
    const {id,caption,url,embedLink} = video

    if( !id || !caption || !url || !embedLink){
      toast.warning('please fill form competely')
    }
    else{
      const response = await uploadAllVideo(video)
      console.log(response);
      if(response.status>=200 & response.status<=300){
        toast.success(`${response.data.caption} is successfuly uploaded`)

        

        // to closr the modAL
        handleClose()

        // to change the value of uploadvideostatus
        setUploadVideoStatus(response.data)
      }
      else{
        console.log(response);
        toast.error('Someting went wrong try again!!')
      }
    }
  }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New video</h5>
        <button className='button ms-2' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title > <i class="fa-solid fa-film fa-2xl me-2 text-warning"></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form completely</p>

          <form className='border border-secondary rounded p-3'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" onChange={(e) =>setVideo({...video,id:e.target.value})} placeholder="Enter video ID" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" onChange={(e) =>setVideo({...video,caption:e.target.value})} placeholder="Enter Video Caption" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" onChange={(e) =>setVideo({...video,url:e.target.value})} placeholder="Enter Video Image Url" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" onChange={embededvideoLink} placeholder="Enter Youtube Video link" />
         </Form.Group>



          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleupload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add
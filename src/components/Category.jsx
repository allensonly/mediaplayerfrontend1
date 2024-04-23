import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Category() {

  const [category,setCategory] = useState()

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <div className='ms-3 d-grid'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
    </div>

    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil fa-2xl text-warning"></i> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>please fill the form completely</p>
          
          <form className='border border-secondary rounded p-3'>

          

         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={(e) => setCategory()} type="text" placeholder="Enter category name" />
         </Form.Group>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category
import React, { PureComponent } from 'react'
import { Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';


function Landingpage(){
   
    const navigateurl = useNavigate()
    return (
      <>
      
      <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center w-100'>
       <Col></Col>
       <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>

        <p style={{textAlign:'justify'}} className='mt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eaque, reprehenderit ex corrupti maxime excepturi quisquam sunt molestias doloremque fuga ullam totam suscipit. Veritatis soluta dolorem, nesciunt aliquid itaque at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, autem! Nihil esse nostrum sapiente architecto fugit reiciendis officiis culpa, dolore soluta amet rerum suscipit obcaecati, aspernatur temporibus optio fuga. Molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci excepturi distinctio nesciunt quibusdam unde eius ullam accusantium quidem sit, odio obcaecati laudantium modi deleniti ab iusto non quae, nam a!
        </p>
        <button className='btn btn-warning mt-5' onClick={() => navigateurl('/home')}>Get Started <i class="fa-solid fa-arrow-right fa-2xl"></i></button>
       </Col>
       <Col></Col>
       <Col lg={5}>
        <img src="https://38.media.tumblr.com/0583b128482a66f0a3a36ef6b2b3bb90/tumblr_nc43mqBf3U1r1tezoo2_r1_500.gif" alt="no image" />
       </Col>
      </Row>

      <div className=' container d-flex flex-column justify-content-center align-items-center'>

        <h1>Features</h1>

        <div className='mt-4'>
        <CardGroup >
      <Card className='me-4'>
        <Card.Img variant="top" className='p-3' style={{height:'400px'}} src="https://i.pinimg.com/originals/85/04/c2/8504c2fc1b137261ac22da7b2479d06f.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='me-4'>
        <Card.Img variant="top" className='p-3' style={{height:'400px'}} src="https://i.pinimg.com/originals/63/4a/ea/634aeafde3993421dbdf337d49f425dc.gif" />
        <Card.Body>
          <Card.Title>Catogorised Videos</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='me-4'>
        <Card.Img variant="top" className='p-3' style={{height:'400px'}} src="https://cdn.dribbble.com/users/746306/screenshots/4639102/wave_sound.gif" />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
        </div>

      </div>

      <div className='container border border-2 border-secondary rounded mt-5 w-100 align-items-center d-flex justify-content-between'>

        <Row className='p-5 mt-3' style={{textAlign:'justify'}}>
          <Col lg={5}>
            <h3 className='text-warning mb-5'>Simple Fast And Powerfull</h3>
            <h6 className='mb-3 mt-2'><span className='fs-5 fw-bolder' >Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam quam repudiandae iste id saepe velit alias, exercitationem, veniam pariatur eaque fuga eligendi, fugit iure dolorem non unde voluptatum molestiae?</h6>

            <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam quam repudiandae iste id saepe velit alias, exercitationem, veniam pariatur eaque fuga eligendi, fugit iure dolorem non unde voluptatum molestiae?</h6>

            <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam quam repudiandae iste id saepe velit alias, exercitationem, veniam pariatur eaque fuga eligendi, fugit iure dolorem non unde voluptatum molestiae?</h6>
          </Col>
          <Col></Col>
          <Col lg={6} className='mt-2 mb-5'>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/szvt1vD0Uug" title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>

      </div>
      
      </>
    )
  }


export default Landingpage
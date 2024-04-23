import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}}  className='d-flex align-items-center justify-content-center flex-column mt-5 '>
       <div className='footer d-flex align-items-center justify-content-evenly w-100  '>
       <div className='website mt-4 ' style={{width:'400px'}}>
       <h4><i class="fa-solid fa-video text-warning me-3"></i> 
            Video player</h4>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, repellat porro minima architecto earum itaque rem omnis quaerat eos tempore mollitia vero, voluptate debitis eum odio molestias. Nesciunt, accusantium quod.</h6>
        </div> 
        <div className='link d-flex flex-column '>
  <h4>Links</h4>
  <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landingpage</Link>
  <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Homepage</Link>
  <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>Watch history</Link>
   

        </div>
        <div className='guides d-flex flex-column '>
    <h4>Guides</h4>
    
  <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white'}}>Bootstrp</Link>
  <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
  <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>

        </div>
        <div className='contact '>
         <h4>Contact Us </h4>
         <div className='d-flex mb-3'>
          <input type="text" className='form-control ' placeholder='Enter your email-id'/>
          <button className='btn btn-warning text-white ms-3'>Subscribe</button>
         </div>

         <div className='d-flex justify-content-evenly  '>
         <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x "></i></Link>
         <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
         <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x "></i></Link>
         <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x "></i></Link>






         </div>

        </div>
        
       </div>
    
      <p className='mt-5'>Copyright @ 2023 Media Player.Built with React</p>
    </div>
  )
}

export default Footer
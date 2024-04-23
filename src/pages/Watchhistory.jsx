import React, { useEffect, useState } from 'react'
import { getAllHistory } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Watchhistory() {

  const [history,setHistory] = useState([])

  const getHistory = async() => {

    const {data} = await getAllHistory()
    console.log(data);

    setHistory(data)

  }
  console.log(history);

  useEffect(() => {
    getHistory()
  },[])
  

  return (
    <>
    <div className='container mt-5 d-flex justify-content-between '>
      <h3>Watch History</h3>
      <Link to ={'/home'} className ='d-flex align-items-center' style={{textDecoration:'none',color:'white'}} >Back to home
       </Link>
   </div >

   <table className='table mt-5 mb-5 container'>
    <thead>
      <tr>
      <th>no</th>
      <th>Caption</th>
      <th>URL</th>
      <th>Time Stamp</th>
      </tr>

    </thead>

    <tbody>

       

      { history.length>0?
       history.map((item) =>  (<tr>
        <td>{item.id}</td>
        <td>{item.caption}</td>
        <td><a href={item.embedLink} target='_blank'></a></td>
        <td>{item.timeStamp}</td>
        
      </tr>))
      :
      <p>nothing to display</p>
      
    
       }
    </tbody>


   </table>
    
    
    </>
  )
}

export default Watchhistory


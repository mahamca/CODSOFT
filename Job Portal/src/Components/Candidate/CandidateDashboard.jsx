import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CandidateDashboard = () => {
const [jobdetails,setJobdetails]=useState([])
const [title,setTitle]=useState('')
const [titlesearch,setTitleSearch]=useState('')


const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://127.0.0.1:4002/job/all')
    .then(response=> setJobdetails(response.data))
    .catch(error=>console.log(error))
  },[])


  const search=(event)=>{
    event.preventDefault()

//    setTitleSearch(jobdetails.filter(job=>job.title===title))
    
setJobdetails(jobdetails.filter(job=>job.title===title))


      }


  return (
    <div>



<form role="search">
  <center>      <input className="styled-input" type="search" placeholder="Search jobs here" value={title} onChange={event=>setTitle(event.target.value)} aria-label="Search"/>
        <button className="btn btn-outline-success"  type="submit" onClick={(event)=>search(event)} >Search</button></center>
         </form>


        



<div className="product-list">
            {jobdetails.map((job,index) => (
                <div key={job.id} className="product">
                                       <h2>&nbsp;{job.title}</h2>
                    <p>&nbsp;&nbsp;{job.desc}</p> 
                      <p>&nbsp;&nbsp;<img src="/src/images/suitcase.png"  alt="..." style={{width:"20px"}}/> {job.experience} Yrs</p> 
                    <p>&nbsp;&nbsp;Skill : {job.skill}</p>
                    <p>{job.company} , &nbsp; {job.location} <button className='btn btn-info float-end' style={{marginRight:"5px"}} onClick={()=>navigate(`/applynow/${job._id}`)}>Apply Now</button> <button className='btn btn-info float-end' style={{marginRight:"5px"}} onClick={()=>navigate(`/detailview/${job._id}`)}>View details</button>
                    </p>
                </div>
            ))}
        </div>
     


    </div>
  )
}

export default CandidateDashboard
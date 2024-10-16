import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmployerDashboard = () => {

  const navigate=useNavigate()
  const [jobdetails,setJobdetails]=useState([])



  useEffect(()=>{
    axios.get('http://127.0.0.1:4002/job/all')
    .then(response=> setJobdetails(response.data.filter(job=>job.empid=== localStorage.getItem("Id"))))
    .catch(error=>console.log(error))
  },[])







  return (
    <div>
        <button className='btn btn-info float-end' onClick={()=>navigate('/jobpost/')}>Post Job</button>
<br /><br />
        <div className="product-list" >
            {jobdetails.map((job,index) => (
                <div key={job.id} className="product">
                    <h2>&nbsp;{job.title}</h2>
                    <p>&nbsp;&nbsp;{job.desc}</p> 
                      <p>&nbsp;&nbsp;<img src="/src/images/suitcase.png"  alt="..." style={{width:"20px"}}/> {job.experience} Yrs</p> 
                    <p>&nbsp;&nbsp;Skill : {job.skill}</p> 
                    <p>{job.company} , &nbsp; {job.location}
                     <button className='btn btn-info float-end' style={{marginRight:"5px"}} onClick={()=>navigate(`/detail/${job._id}`)}>Upload details</button>
                     <button className='btn btn-info float-end' style={{marginRight:"5px"}} onClick={()=>navigate(`/detailview/${job._id}`)}>View details</button>
                     <button className='btn btn-info float-end' style={{marginRight:"5px"}} onClick={()=>navigate(`/Candidateview/${job._id}`)}>View Candidates</button>
                    
                    </p>
                    
                </div>
            ))}
        </div>



    </div>
  )
}

export default EmployerDashboard
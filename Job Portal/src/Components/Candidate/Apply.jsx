import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Popup from '../Popup'
const Apply = () => {

   

const [jobdetails,setJobdetails] = useState([''])
  const [base64String, setBase64String] = useState('')
  
  const [showModel,setShowModel] = useState(false)
const params=useParams()
const {id}=params
const navigate=useNavigate()

useEffect(()=>{
    axios.get('http://127.0.0.1:4002/job/all')
.then(response=>setJobdetails(response.data.filter(job=>job._id===id)))
.catch(error=>console.log(error))
},[])

const closeModel=()=>{
    setShowModel(false)
        
  }
const handleImageChange = event => {

    const file = event.target.files[0]

    const reader = new FileReader()

    reader.onloadend = () => {

        const base64 = reader.result

        setBase64String(base64)
    }

    reader.readAsDataURL(file)
}

const SubmitHandler = (event) => {

    event.preventDefault()
    
    const dataset ={
        image: base64String,
        name:localStorage.getItem("Name"),
        phno:localStorage.getItem("phno"),
        email:localStorage.getItem("email"),
        jobid:id,
        canid:localStorage.getItem("Id")
              
    }
    axios.post("http://127.0.0.1:4002/upload/upload",dataset)
    .then(response => {  setShowModel(true)
        
        
        
    })
    .catch(error => {})

  }

const submit=(event)=>{
    const dataset={
        to:localStorage.getItem("email"),
        subject:" Your Job Application Sent Successfully "
    }
    axios.post('http://127.0.0.1:4002/sendmail/send',dataset)
    .then(response=>navigate('/candidatedb/')  )
    .catch(error=>console.log(error))
}


  return (
    <div>
        <Popup show={showModel} handleClose={closeModel}>
    <p className='text-danger'> Resume Uploaded Successfully </p>
  </Popup>

<div className="product-list">
            {jobdetails.map((job,index) => (
                <div key={job.id} className="product">
                                       <h2>&nbsp;{job.title}</h2>
                    <p>&nbsp;&nbsp;{job.desc}</p> 
                      <p>&nbsp;&nbsp;<img src="/src/images/suitcase.png"  alt="..." style={{width:"20px"}}/> {job.experience} Yrs</p> 
                    <p>&nbsp;&nbsp;Skill : {job.skill}</p>
                    <p>{job.company} , &nbsp; {job.location} 
                    </p>
                </div>
            ))}
        </div>

<div className='form-group'>

   
        <label htmlFor="">Upload a Resume:</label><br />
        <input type="file" accept="image/*" onChange={handleImageChange} /><br /><br />

        <input type="submit"  value="Upload" style={{background:"pink"}} onClick={SubmitHandler}/>

        </div>

<button className='btn btn-info float-end' style={{marginRight:"5px"}} onClick={(event)=>submit(event)} >Apply Now</button> 
                  
    </div>
  )
}

export default Apply
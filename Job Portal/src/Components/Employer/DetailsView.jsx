import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const DetailsView = () => {
     
     
    const [data,setData]=useState([])

    const params=useParams()
    const {id} =params
  
    const navigate=useNavigate()

useEffect(()=>{
    axios.get('http://127.0.0.1:4002/detail/all')
.then(response=>setData(response.data.filter(details=>details.jobid===id)))
.catch(error=>console.log(error))
})


let res=data.map((details,index)=>{
    return(
        <div key={index}>
            <form className='login-form'>
            <label htmlFor=""><strong>Overview : </strong></label>
            <br />{details.overview}
            <br /> <br />
            <label htmlFor=""><strong>Key Response : </strong></label>
            <br />{details.keyresponse}
            <br /> <br />
            <label htmlFor=""><strong>Required Skills and Qualifications:</strong></label>
            <br />{details.rskill}
            <br /><br />
            <label htmlFor=""><strong>Soft Skills:</strong></label>
            <br />{details.sskill}
            <br /> <br />
            <label htmlFor=""><strong>Roll</strong></label>
            <br />{details.role}
            <br /> <br />
            <label htmlFor=""><strong>Employment Type:</strong></label>
            <br />{details.emptype} <br /> <br />
            <label htmlFor=""><strong>Role Category:</strong></label>
            <br />{details.rolecat}
            <br /> <br />
            <label htmlFor=""><strong> Education</strong></label><br />
            <label htmlFor=""><strong>UG</strong></label>
            <br />{details.ug} <br />
            <label htmlFor=""><strong>PG</strong></label>
            <br />{details.pg} <br /> <br />

           
            </form>
           

        </div>
    )
})







  return (
    <div>


      <button  className='btn btn-warning float-end' onClick={()=>navigate('/candidatedb')}>BACK</button> <br />
      
        
        
    

{res}
 {/* <button className='login-button' onClick={navigate('/applynow/')}>Apply Now</button> */}
 <button  className='btn btn-warning float-end' onClick={()=>navigate(`/applynow/${id}`)}>Apply Now</button>
    </div>
  )
}

export default DetailsView
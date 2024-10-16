import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const JobPostForm = () => {


    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [experience,setExperience] =useState('')
    const [company, setCompany] = useState('');
    const [skill, setSkill] = useState('');
    const [location, setLocation] = useState('');
const navigate=useNavigate()


const Submit=(event)=>{
    event.preventDefault()
    const dataset={
        empid:localStorage.getItem("Id"),
        title:title,
        desc:desc,
        experience:experience,
        skill:skill,
        company:company,
        location:location
    }

axios.post('http://127.0.0.1:4002/job/add',dataset)
.then(navigate('/employeedb/'))
.catch(error=>console.log(error))



}



  return (
    <div>
        
        <button  className='btn btn-warning float-end' onClick={()=>navigate('/employeedb/')}>BACK</button>
        <form className='login-form'>
    <div className='form-group'>
    <label htmlFor="" >Title</label>
    <input type="text" value={title} onChange={event=>setTitle(event.target.value)}/><br /><br /></div>

    <div className='form-group'>
    <label htmlFor="" >Company Name</label>
    <input type="text" value={desc} onChange={event=>setDesc(event.target.value)}/><br /><br /></div>


   <div className='form-group'> <label htmlFor="">Experience</label>
    <input type="text"  value={experience} onChange={event=>setExperience(event.target.value)} /><br /></div>

    <div className='form-group'> <label htmlFor="">Skill</label>
    <input type="text"  value={skill} onChange={event=>setSkill(event.target.value)} /><br /></div>

    <div className='form-group'>
    <label htmlFor="" >Work Model</label>
    <input type="text" value={company} onChange={event=>setCompany(event.target.value)}/><br /><br /></div>


    <div className='form-group'>
    <label htmlFor="" >location</label>
    <input type="text" value={location} onChange={event=>setLocation(event.target.value)}/><br /><br /></div>

   <button className='login-button' onClick={event=>Submit(event)}>Post</button>

</form>






    </div>
  )
}

export default JobPostForm
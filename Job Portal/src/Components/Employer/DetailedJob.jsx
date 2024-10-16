
import React , {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailedJob = () => {

  const [overview, setOverView] = useState('');
  const [keyresponse, setKeyresponse] = useState('');
  const [rskill,setRskill] =useState('')
  const [sskill, setSskill] = useState('');
  const [role, setRole] = useState('');
  const [emptype, setEmptype] = useState('');
  const [rolecat, setRolecat] = useState('');
  const [ug, setUg] = useState('');
  const [pg, setPg] = useState('');

  const params=useParams()
  const {id} = params
  
const navigate=useNavigate()
  
  const Submit=(event)=>{
    event.preventDefault()
    const dataset={
        jobid:id,
        overview:overview,
        keyresponse:keyresponse,
        rskill:rskill,
        sskill:sskill,
        role:role,
        emptype:emptype,
        rolecat:rolecat,
        ug:ug,
        pg:pg

    }

axios.post('http://127.0.0.1:4002/detail/add',dataset)
.then(response=>navigate('/employeedb/'))
.catch(error=>console.log(error))

}


  return (
    <div>
       
      <button  className='btn btn-warning float-end' onClick={()=>navigate('/employeedb/')}>BACK</button>
        

<form className='login-form' >
    <div className='form-group'>
    <label htmlFor="" >Job Overview</label><br />
    <textarea rows="5" cols="30" value={overview}  onChange={event=>setOverView(event.target.value)} style={{width:"360px"}}/></div>
    <div className='form-group'>
    <label htmlFor="" >Key Responsibilities</label>
    <input type="text" value={keyresponse} onChange={event=>setKeyresponse(event.target.value)}/><br /></div>


   <div className='form-group'> <label htmlFor="">Required Skills and Qualifications:</label>
    <input type="text"  value={rskill} onChange={event=>setRskill(event.target.value)} /><br /></div>

    <div className='form-group'> <label htmlFor="">Soft Skills:</label>
    <input type="text"  value={sskill} onChange={event=>setSskill(event.target.value)} /><br /></div>

    <div className='form-group'>
    <label htmlFor="" >Role</label>
    <select class="form-select" aria-label="Default select example" value={role}   onChange={event=>setRole(event.target.value)} >
  <option selected>--select--</option>
  <option value="Full stack developer">Full stack developer </option>
  <option value="Back end developer">Back end developer</option>
  <option value=".Net developer">.Net developer</option>
  </select></div>

    <div className='form-group'>
    <label htmlFor="" >Employment Type:</label>
    <select class="form-select" aria-label="Default select example"  value={emptype}   onChange={event=>setEmptype(event.target.value)}>
  <option selected>--select--</option>
  <option value="Full Time, Permanent">Full Time, Permanent </option>
  <option value="Part Time">Part Time</option>
  </select></div>


    <div className='form-group'>
    <label htmlFor="" >Role Category: </label>
    <select class="form-select" aria-label="Default select example" value={rolecat}   onChange={event=>setRolecat(event.target.value)} >
  <option selected>--select--</option>
  <option value="Software Development"> Software Development </option>
  <option value="Software Testing">Software Testing</option>
  </select><br /></div>

    
    <div className='form-group'>
      <label htmlFor=""> Education</label>
   <br />
    <label htmlFor="" >UG: </label>
    <select class="form-select" aria-label="Default select example" value={ug}   onChange={event=>setUg(event.target.value)} >
  <option selected>--select--</option>
  <option value="Any Graduate">Any Graduate </option>
  <option value="BCA">BCA</option>
  <option value="B.Sc">B.Sc</option>
</select>
       <label htmlFor="" >PG: </label>
       <select class="form-select" aria-label="Default select example" value={pg}   onChange={event=>setPg(event.target.value)} >
  <option selected>--select--</option>
  <option value="Any Postgraduate">Any Postgraduate </option>
  <option value="MCA">MCA</option>
  <option value="M.Sc">M.Sc</option>
 
</select>
   <br /></div>

   <button className='login-button' onClick={event=>Submit(event)}>Save</button>

</form>



                  

    </div>
  )
}

export default DetailedJob
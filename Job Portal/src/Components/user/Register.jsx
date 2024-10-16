import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { Radio } from 'antd';
import {Radio} from 'antd'


const Register = ({setLogin,setSide}) => {
  const navigate=useNavigate()

    const [fname,setFName] = useState('')
    const [lname,setLName] = useState('')
    const [phone_no,setPhoneNo] = useState('')
    const [Uname,setUName] = useState('')
    const [pwd,setPwd] = useState('')
    const [gender, setGender] = useState('male');
    const [email,setEmail] =useState('')
    const [role,setRole]=useState('')

    setLogin(false)
    setSide(false)
    useEffect(()=>{
      return(()=>{
        setLogin(true)
        setSide(true)
      })
    },[])

    const onChange = (e) => {
            setGender(e.target.value);
    };


const Submit =(event)=>{
    event.preventDefault()
    const dataset ={
        first_name:fname,
        last_name:lname,
        phone_no:phone_no,
        gender:gender,
        email:email,
        role:role,
        username : Uname,
        password:pwd
    }
    axios.post('http://127.0.0.1:4002/user/create/',dataset)
    .then(response=>navigate('/login/'))
    .catch(error=>console.log(error))
}



  return (
    <div className='regcontain'>
      
    
    
        <form className='login-form'>
          <div className='form-group'> 
<label htmlFor="">Frist Name</label>
<input type="text" value={fname} onChange={event=>setFName(event.target.value)} /></div>
<div className='form-group'><label htmlFor="" >Last Name</label>
<input type="text" value={lname}  onChange={event=>setLName(event.target.value)}/></div>
<div className='form-group'><label htmlFor="">Phone Number</label>
<input type="Number" value={phone_no} onChange={event=>setPhoneNo(event.target.value)}/></div>
<div className='form-group'>
<label htmlFor="">Gender</label><br />
<Radio.Group onChange={event=>setGender(event.target.value)} value={gender}>
      <Radio value={'male'} style={{fontSize:"15px"}}>Male</Radio>
      <Radio value={'female'} style={{fontSize:"15px"}}>Female</Radio>
          </Radio.Group>


</div>
<div className='form-group'><label htmlFor="">E Mail</label>
<input type="text" value={email} onChange={event=>setEmail(event.target.value)}/></div>
<div className='form-group'>
<label htmlFor="">Role</label>
<select class="form-select" onChange={event=>setRole(event.target.value)} value={role} aria-label="Default select example">
  <option selected>Select the role</option>
  <option value={'Employer'}>Employer</option>
  <option value={'Candidate'}>Candidate</option>
  </select>

</div>

<div className='form-group'><label htmlFor="">User Name</label>
<input type="text"  value={Uname} onChange={event=>setUName(event.target.value)}/></div>
<div className='form-group'><label htmlFor="">Password</label>
<input type="password" value={pwd} onChange={event=>setPwd(event.target.value)} /></div>
<input type="button" className='login-button' value="Register" onClick={event=>Submit(event)} />
</form>
<div className='reg-button'>
      <button  className='btn btn-warning' onClick={()=>navigate('/')}>BACK</button></div>
        
    </div>
  )
}

export default Register
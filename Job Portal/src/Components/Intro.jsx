import React ,{useEffect} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


const Intro = ({setLogin , setSide}) => {
const navigate=useNavigate()

setLogin(false)


    useEffect(()=>{
       return ()=>{
        setLogin(true)
       }
    },[])


    setSide(false)
useEffect(()=>{
  return(()=>{
    setSide(true)
  })
},[])
  return (
    <div>

<header className="header">
        <h1 style={{display:"inline"}}>JOB PORTAL</h1>
        <nav style={{display:"inline" , color:"white", textAlign:"end"}}>
       
      {/* <button className="btn btn-primary float-end" style={{marginRight:"20px"}} onClick={()=>navigate('/')}  >CONTACT US</button> */}
      <button className="btn btn-light float-end"style={{marginRight:"20px"}}onClick={()=>navigate('/login/')}>Login</button>
      <button className="btn btn-light float-end"style={{marginRight:"20px"}}onClick={()=>navigate('/register/')}>Register</button>
      
        </nav>
      </header>
   <br /><br />
    

<br />
  
   {/* <button className="btn btn-outline-success float-end" onClick={()=>navigate('/login/')}  >SIGN IN</button>
<button className="btn btn-outline-primary float-end" onClick={()=>navigate('/register/')}>SIGN UP</button> */}
<h2 style={{color:"green", fontFamily:"fantasy", fontSize:"20px"}}>DON'T STOP <br />
UNTIL YOU'RE PROUD!!</h2>
   <br />


   

   <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="src/images/jobsearch.avif" className="d-block w-20" alt="..." style={{width:"100%",height:"300px"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="src/images/img6.png" className="d-block w-20" alt="..." style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src="src/images/img5.jpg" className="d-block w-20" alt="..." style={{width:"100%"}}/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div><br />
<div className='para-design'>
  <p >
  In today’s competitive job market, finding the right job can be challenging for candidates, while employers often struggle to find the best talent. Our job portal aims to bridge this gap by providing a user-friendly platform that simplifies the job search process for both parties.
  Job seekers often face difficulties navigating multiple job boards, submitting applications, and receiving feedback. On the other hand, employers spend significant time sifting through countless applications, many of which may not match their requirements. This results in frustration and lost opportunities.
  Throughout the development process, we encountered challenges such as ensuring data security, implementing a user-friendly interface, and managing database relationships. However, through collaboration and innovative problem-solving, we were able to overcome these obstacles.Looking ahead, we plan to incorporate additional features like AI-driven job recommendations, video interviews, and integration with social media platforms to enhance user experience and increase engagement. </p>

</div>


<Row gutter={16}>
    <Col span={8}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="src/images/img5.jpeg" />}
  >
    <Meta title="" description="" />
  </Card>
    </Col>
    <Col span={8}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" style={{height:"120px"}} src="src/images/img6.png" />}
  >
    <Meta title="" description="" />
  </Card>
    </Col>
    <Col span={8}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" style={{height:"120px"}} src="src/images/img7.jpg" />}
  >
    <Meta title="" description="" />
  </Card>
    </Col>
  </Row>
<br />
<div className='footer'>
<h3> Quick Links</h3>
 HOME <br />
 CONTACT US <br />
 LOGIN <br />
 contact us <br />
 phone no <br />
 email

</div>

    </div>
  )
}

export default Intro
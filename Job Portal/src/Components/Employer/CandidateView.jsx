import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ImagePreview from './ImagePreview'



const CandidateView = () => {
 
    const [imageSrc, setImageSrc] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [candidate,setCandidate]=useState([''])
    const params=useParams()
    const {id}=params

    useEffect(()=>{
        axios.get('http://127.0.0.1:4002/upload/all')
    .then(response=>setCandidate(response.data.filter(upload=>upload.jobid===id)))
    .catch(error=>console.log(error))
    })


    const handlePreviewClick = () => {
        setShowPreview(true);
      };
    
      const handleClosePreview = () => {
        setShowPreview(false);
      };

  return (
    <div>Candidates

<div className="product-list">
            {candidate.map((job,index) => (
                <div key={job.id} className="product">
                    <div className='app-container'>
                    <div className='details-section'>
                    <h2>&nbsp;{job.name}</h2>
                    <p>&nbsp;&nbsp;{job.phno}</p> 
                    <p>&nbsp;&nbsp;{job.email}</p>
                    </div>
                                      
                    <div className="image-section">
                <img src={job.image}  alt="..." style={{width:"100px"}} onClick={handlePreviewClick} className="thumbnail"/>
      {/* <img src={imageSrc} alt="Uploaded" className="hover-image" /> */}
    </div>
    </div>
    {showPreview && (
        <div className="modal" onClick={handleClosePreview}>
          <img src={job.image} alt="Full Size" className="full-image" />
        </div>
      )}
                     
                </div>
            ))}
        </div>



    </div>
  )
}

export default CandidateView
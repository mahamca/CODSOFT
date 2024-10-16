import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MailOutlined } from '@ant-design/icons';

import Navbar from "./Navbar";
import Register from "./Components/user/Register";

import Intro from './Components/Intro';
import Login from './Components/user/Login';
import WelcomePage from './Components/WelcomePage';

import { store } from './Components/react-redux/store';
import { Provider } from 'react-redux';
import Sidebar from './Sidebar';
import EmployerDashboard from './Components/Employer/EmployerDashboard';
import CandidateDashboard from './Components/Candidate/CandidateDashboard';
import JobPostForm from './Components/Employer/JobPostForm';
import DetailedJob from './Components/Employer/DetailedJob';
import DetailsView from './Components/Employer/DetailsView';
import Apply from './Components/Candidate/Apply';
import CandidateView from './Components/Employer/CandidateView';
import ImageRender from './Components/Employer/ImageRender';






const { Sider, Content } = Layout;

const App = () => {
  const location = useLocation();
  const [login,setLogin] = useState(false)
  const [side,setSide] =useState(false)


  return (
    <Provider store={store}>
    <div>
      {
        login && <Navbar></Navbar> 
      }
     <Layout style={{ minHeight: '100vh' }}>
      {
        side && <Sidebar></Sidebar>
        }
     
       
        <Layout style={{ padding: '0 24px', minHeight: '100vh' }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Routes>
              <Route path="/" element={<Intro setLogin={setLogin} setSide={setSide}/>} />
              <Route path="/login" element={<Login setLogin={setLogin} setSide={setSide}/>} />
             
              <Route path="/register/" element={<Register setLogin={setLogin} setSide={setSide}/>}/>
              
              <Route path="/welcome/" element={<WelcomePage/>}/>
             <Route path='/employeedb/' element={<EmployerDashboard/>}/>
             <Route path='/candidatedb/' element={<CandidateDashboard/>}/>
             <Route path='/jobpost/' element={<JobPostForm/>}/>
             <Route path='/detail/:id' element={<DetailedJob/>}/>
             <Route path='/detailview/:id' element={<DetailsView/>}/>
             <Route path='/applynow/:id' element={<Apply/>}/>
             <Route path='/candidateview/:id' element={<CandidateView/>}/>
             <Route path='/image/' element={<ImageRender/>}/>

              
              
             
    
            </Routes>
          </Content>
        </Layout>
        </Layout>
       
      
      </div>
      </Provider>
  );
}

export default App;
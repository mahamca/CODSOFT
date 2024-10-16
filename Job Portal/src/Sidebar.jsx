import React from 'react'
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import Sider from 'antd/es/layout/Sider';

const Sidebar = () => {
  return (
   
    <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="" icon={<HomeOutlined />}>
        <Link to="/candidatedb/">Home</Link>
        </Menu.Item>
      <Menu.Item key="/info" icon={<InfoCircleOutlined />}>
        <Link to="/info">Applied Jobs</Link>
      </Menu.Item>

      <Menu.Item key="/planlist" icon={<MailOutlined />}>
        <Link to="/planlist">Profile</Link>
      </Menu.Item>
    </Menu>
  </Sider>

  )
}

export default Sidebar
import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';

const { Header } = Layout;
const Headerpage = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1" className="active">
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/TabelPage">TABLE</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/NewUserPage">NEW USER</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default Headerpage;

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import Schedule from '../components/schedule';
import Speakers from '../components/speakers';
import logo from '../images/logo.jpg';

const { Header, Content, Footer, Sider } = Layout;

class MainPage extends React.Component {

  onMenuClick = (item) => {
    if (item.key === '1')
      window.location.href = '/main/CoursesList';
    if (item.key === '2')
      window.location.href = '/main/SurveyList';
    if (item.key === '3')
      window.location.href = '/main/Profile';
    if (item.key === '4')
      window.location.href = '/main/Report';
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          // collapsible
          // collapsed={this.state.collapsed}
          // onCollapse={this.onCollapse}
          theme='light'
          width='160' >
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            style={{ padding: '180px 0' }}>
            <Menu.Item key="1">Schedule</Menu.Item>
            <Menu.Item key="2">Background</Menu.Item>
            <Menu.Item key="3">Travel</Menu.Item>
            <Menu.Item key="4">Links</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{background: '#fff'}}>
          <Header style={{ height: '240px', background: '#eee', padding: 0 }}>
            <img src={logo} className="App-logo" alt="logo" />
          </Header>
          <Content className="wrapper-content" style={{ margin: '60px 160px' }}>
            <BrowserRouter>
              <div>
                <Speakers />
                <Schedule />
              </div>
            </BrowserRouter>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;

import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import Intro from '../components/Intro';
import Sponsor from '../components/Sponsor';
import Links from '../components/Links';
import Title from '../images/title.jpg';
import Logo from '../images/logo.jpg';
import Organizers from '../components/Organizers';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';

const { Header, Content, Footer, Sider } = Layout;

class MainPage extends React.Component {
  selectedKey = localStorage.getItem('itocSelectedKey');

  onMenuClick = (item) => {
    if (item.key === '1') {
      window.location.href = '/codesign/intro';
      localStorage.setItem('itocSelectedKey', '1');
    }
    if (item.key === '2') {
      window.location.href = '/codesign/schedule';
      localStorage.setItem('itocSelectedKey', '2');
    }
    if (item.key === '3') {
      window.location.href = '/codesign/organizers';
      localStorage.setItem('itocSelectedKey', '3');
    }
    if (item.key === '4') {
      window.location.href = '/codesign/speakers';
      localStorage.setItem('itocSelectedKey', '4');
    }
    if (item.key === '5') {
      window.location.href = '/codesign/links';
      localStorage.setItem('itocSelectedKey', '5');
    }
  }

  componentWillMount() {
    if (window.location.href.indexOf('schedule') !== -1) {
      this.selectedKey = '2';
    } else if (window.location.href.indexOf('organ') !== -1) {
      this.selectedKey = '3';
    } else if (window.location.href.indexOf('speak') !== -1) {
      this.selectedKey = '4';
    } else if (window.location.href.indexOf('link') !== -1) {
      this.selectedKey = '5';
    } else {
      this.selectedKey = '1';
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme='light'
          width='256' >
          <Menu
            onClick={this.onMenuClick}
            style={{width: 256, padding: '30px 0', position: 'fixed' }}
            selectedKeys={[this.selectedKey]}
            mode="inline">
            <img src={Logo} alt="logo" className="Side-logo" />
            <Menu.Item key="1" style={{fontSize: '18px' }} >Intro</Menu.Item>
            <Menu.Item key="2" style={{fontSize: '18px' }} >Schedule</Menu.Item>
            <Menu.Item key="3" style={{fontSize: '18px' }} >Organizers</Menu.Item>
            <Menu.Item key="4" style={{fontSize: '18px' }} >Speakers</Menu.Item>
            <Menu.Item key="5" style={{fontSize: '18px' }} >Links</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{background: '#fff'}}>
          <Header style={{ textAlign: 'center', height: '240px', background: '#fff', padding: 0 }}>
            <img src={Title} className="App-logo" alt="logo" />
          </Header>
          <Content className="wrapper-content" style={{ margin: '60px 320px' }}>
            <BrowserRouter>
              <div>
                <Route path='/codesign/intro' component={Intro} />
                <Route exact path='/codesign/schedule' component={Schedule} />
                <Route path='/codesign/links' component={Links} />
                <Route path='/codesign/organizers' component={Organizers} />
                <Route path='/codesign/speakers' component={Speakers} />
              </div>
            </BrowserRouter>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;

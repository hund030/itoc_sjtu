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
      window.location.href = '/codesign19/index';
      localStorage.setItem('itocSelectedKey', '1');
    }
    if (item.key === '2') {
      window.location.href = '/codesign19/schedule';
      localStorage.setItem('itocSelectedKey', '2');
    }
    if (item.key === '3') {
      window.location.href = '/codesign19/organizers';
      localStorage.setItem('itocSelectedKey', '3');
    }
    if (item.key === '4') {
      window.location.href = '/codesign19/speakers';
      localStorage.setItem('itocSelectedKey', '4');
    }
    if (item.key === '5') {
      window.location.href = '/codesign19/links';
      localStorage.setItem('itocSelectedKey', '5');
    }
  }

  componentWillMount() {
    if (window.location.href.indexOf('schedule') !== -1) {
      this.selectedKey = '2';
    } else if (window.location.href.indexOf('organizers') !== -1) {
      this.selectedKey = '3';
    } else if (window.location.href.indexOf('speakers') !== -1) {
      this.selectedKey = '4';
    } else if (window.location.href.indexOf('links') !== -1) {
      this.selectedKey = '5';
    } else if (window.location.href.indexOf('index') !== -1) {
      this.selectedKey = '1';
    } else if (window.location.href.indexOf('codesign19') !== -1) {
      window.location.href = '/codesign19/index';
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme='light'
          width='200' >
          <Menu
            onClick={this.onMenuClick}
            style={{width: 200, padding: '30px 0', position: 'sticky', top: 0 }}
            selectedKeys={[this.selectedKey]}
            mode="inline">
            <img src={Logo} alt="logo" className="Side-logo" />
            <Menu.Item key="1" style={{fontSize: '18px' }} >Background</Menu.Item>
            <Menu.Item key="3" style={{fontSize: '18px' }} >Organizers</Menu.Item>
            <Menu.Item key="4" style={{fontSize: '18px' }} >Speakers</Menu.Item>
            <Menu.Item key="2" style={{fontSize: '18px' }} >Program</Menu.Item>
            <Menu.Item key="5" style={{fontSize: '18px' }} >Links</Menu.Item>
          </Menu>
        </Sider>
          <div className="mainLayout">
            <Layout style={{background: '#fff'}}>
              <Header style={{ textAlign: 'center', height: '280px', backgroundImage: 'linear-gradient(#d8caee, #fff)', padding: 0 }}>
                <img src={Title} className="App-logo" alt="logo" />
              </Header>
              <Content className="wrapper-content" style={{ margin: '60px 10%', minWidth: '640px'}}>
                <BrowserRouter>
                  <div>
                    <Route path='/codesign19/index' component={Intro} />
                    <Route exact path='/codesign19/schedule' component={Schedule} />
                    <Route path='/codesign19/links' component={Links} />
                    <Route path='/codesign19/organizers' component={Organizers} />
                    <Route path='/codesign19/speakers' component={Speakers} />
                  </div>
                </BrowserRouter>
              </Content>
              <Footer style={{ textAlign: 'center', background: '#fff' }}>
              </Footer>
            </Layout>
          </div>
      </Layout>
    );
  }
}

export default MainPage;

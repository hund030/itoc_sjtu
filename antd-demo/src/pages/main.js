import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from '../components/Index';
import Intro from '../components/Intro';
import Sponsor from '../components/Sponsor';
import Links from '../components/Links';
import title from '../images/title.jpg';
import Organizers from '../components/Organizers';

const { Header, Content, Footer, Sider } = Layout;

class MainPage extends React.Component {
  selectedKey = localStorage.getItem('itocSelectedKey');

  onMenuClick = (item) => {
    if (item.key === '1') {
      window.location.href = '/';
      localStorage.setItem('itocSelectedKey', '1');
    }
    if (item.key === '2') {
      window.location.href = '/intro';
      localStorage.setItem('itocSelectedKey', '2');
    }
    if (item.key === '3') {
      window.location.href = '/organizers';
      localStorage.setItem('itocSelectedKey', '3');
    }
    if (item.key === '4') {
      window.location.href = '/links';
      localStorage.setItem('itocSelectedKey', '4');
    }
  }

  componentWillMount() {
    if (window.location.href.indexOf('intro') !== -1) {
      this.selectedKey = '2';
    } else if (window.location.href.indexOf('organ') !== -1) {
      this.selectedKey = '3';
    } else if (window.location.href.indexOf('links') !== -1) {
      this.selectedKey = '4';
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
            style={{width: 256, padding: '240px 0', position: 'fixed' }}
            selectedKeys={[this.selectedKey]}
            mode="inline">
<<<<<<< HEAD
            <Menu.Item key="1"><h3>Schedule</h3></Menu.Item>
            <Menu.Item key="2"><h3>Intro</h3></Menu.Item>
            <Menu.Item key="4"><h3>Links</h3></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{background: '#fff'}}>
          <Header style={{ textAlign: 'center', height: '250px', background: '#eee', padding: 0 }}>
            <img src={logo} className="App-logo" alt="logo" />
=======
            <Menu.Item key="1" style={{fontSize: '18px' }} >Schedule</Menu.Item>
            <Menu.Item key="2" style={{fontSize: '18px' }} >Intro</Menu.Item>
            <Menu.Item key="3" style={{fontSize: '18px' }} >Organizers</Menu.Item>
            <Menu.Item key="4" style={{fontSize: '18px' }} >Links</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{background: '#fff'}}>
          <Header style={{ textAlign: 'center', height: '240px', background: '#fff', padding: 0 }}>
            <img src={title} className="App-logo" alt="logo" />
>>>>>>> 7189a6d574313551547e1cc76365c773a2b0678a
          </Header>
          <Content className="wrapper-content" style={{ margin: '60px 320px' }}>
            <BrowserRouter>
              <div>
                <Route exact path='/' component={Index} />
                <Route path='/intro' component={Intro} />
                <Route path='/links' component={Links} />
                <Route path='/organizers' component={Organizers} />
              </div>
            </BrowserRouter>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>
            <Sponsor />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;

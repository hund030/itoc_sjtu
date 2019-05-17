import React from 'react';
import { Row, Col, Divider } from 'antd';
import Profile from '../images/profile.jpg';
import Organizers from './Organizers';

class Speakers extends React.Component {
  render() {
    return (
      <div>
        <h2>Organizers</h2>
        <Organizers/>
        <Divider />
        <h2>Invited Speakers</h2>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <img src={Profile} className="profile" alt="a" />
            <p>a<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="b" />
            <p>b<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="c" />
            <p>c<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="d" />
            <p>b<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="e" />
            <p>e<br/>(sjtu)</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <img src={Profile} className="profile" alt="aaa" />
            <p>aaa<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="bbb" />
            <p>bbb<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="ccc" />
            <p>ccc<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="ddd" />
            <p>ddd<br/>(sjtu)</p>
          </Col>
          <Col span={4}>
            <img src={Profile} className="profile" alt="eee" />
            <p>eee<br/>(sjtu)</p>
          </Col>
        </Row>
        <Divider />
      </div>
    );
  }
}

export default Speakers;
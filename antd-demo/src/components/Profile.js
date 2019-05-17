import React from 'react';
import {Col} from 'antd';

function Profile(props) {
  return (
    <Col>
      <img src={props.src} className={props.cls} alt={props.name} />
      <p>{props.name}<br/>{props.aff}</p>
    </Col>
  )
};

export default Profile;
import React from 'react';
import {Row, Col} from 'antd';

function Card(props) {
  return (
    <Row>
      <Col span={4}>
        <img src={props.src} className={props.cls} alt={props.name} />
      </Col>
      <Col span={12}>
        <h5>{props.name}</h5>
        <p>{props.aff}</p>
        <p>{props.dpt}</p>
      </Col>
    </Row>
  )
}

export default Card;
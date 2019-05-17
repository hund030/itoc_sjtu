import React from 'react';
import { Table } from 'antd';
import {columns1, columns2, day1, day2} from './Table';

class Schedule extends React.Component {
  render() {
    return (
      <div>
        <h2>Schedule</h2>
        <h3>Hohhot, Inner Mongolia, China, Saturday, August 23 (9 Talks) </h3>
        <Table columns={columns1} dataSource={day1} size="middle" pagination={false} />
        <p > &nbsp; </p>
        <h3>Hohhot, Inner Mongolia, China, Saturday, August 24 (13 Talks) </h3>
        <Table columns={columns2} dataSource={day2} size="middle" pagination={ false } />
      </div>
    )
  }
}

export default Schedule;
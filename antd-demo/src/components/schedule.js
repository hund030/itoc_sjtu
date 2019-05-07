import React from 'react'
import { Table } from 'antd';

const columns = [{
  title: 'Time',
  dataIndex: 'time',
}, {
  title: 'Speaker',
  dataIndex: 'speaker',
}, {
  title: 'Title',
  dataIndex: 'title',
}];
const day1 = [{
  key: '1',
  time: '13:20-13:40',
  speaker: 'W.Tang',
  title: 'Opening',
}, {
  key: '2',
  time: '13:40-14:10',
  speaker: 'Robert Harrison',
  title: 'Molecular Modeling at the Exascale.',
}, {
  key: '3',
  time: '14:10-14:40',
  speaker: 'Thomas Schulthess',
  title: 'Leadership Computing for Europe and the Path to Exascale Computing',
}];
const day2 = [{
  key: '1',
  time: '10:30-11:00',
  speaker: 'William Tang',
  title: 'Deep Learning Acceleration of Progress toward Delivery of Fusion Energy.',
}, {
  key: '2',
  time: '13:40-14:10',
  speaker: 'David Keyes',
  title: 'Challenges & Opportunities for Adaptable Algorithmic for Exascale Applications',
}, {
  key: '3',
  time: '14:10-14:40',
  speaker: 'Xiaowen Xu',
  title: 'AutoMG: An automatic tuning multigrid framework for the sequence of linear systems.',
}];

class Schedule extends React.Component {
  render() {
    return (
      <div>
        <h2>Schedule</h2>
        <h3>Qingdao, China, Oct.18, 2018 (Room 7111B) </h3>
        <Table columns={columns} dataSource={day1} size="middle" pagination={ false } />
        <h3>Qingdao, China, Oct.19, 2018 (Room 7111B) </h3>
        <Table columns={columns} dataSource={day2} size="middle" pagination={ false } />
      </div>
    )
  }
}

export default Schedule;
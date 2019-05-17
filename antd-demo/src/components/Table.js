import React from 'react';

const links1 = [
  'http://www.ncic.ac.cn/codesign/files/Co-Design_Workshop_Goals_William_Tang.pdf',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];

const links2 = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];

export const columns1 = [{
  title: 'Session',
  dataIndex: 'session',
  width: 40,
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 1) {
      obj.props.rowSpan = 4;
    } else if ((index >= 2 && index <= 4) || (index >= 7 && index <= 10)) {
      obj.props.rowSpan = 0;
    } else if (index === 6) {
      obj.props.rowSpan = 5;
    }
    return obj;
  },
}, {
  title: 'Time',
  dataIndex: 'time',
  width: 60,
}, {
  title: 'Speaker',
  dataIndex: 'speaker',
  width: 80,
}, {
  title: 'Title',
  dataIndex: 'title',
  width: 200,
  render: (value, row, index) => {
    if (links1[index]) {
      return (<a href={links1[index]}>{value}</a>)
    } else {
      return (<p>{value}</p>)
    }
  }
}];

export const columns2 = [{
  title: 'Session',
  dataIndex: 'session',
  width: 40,
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.rowSpan = 2;
    } else if (index === 8 || index === 12) {
      obj.props.rowSpan = 3;
    } else if ((index === 1) || (index >= 4 && index <= 6) || (index >= 9 && index <= 10) || (index >= 13 && index <= 14)) {
      obj.props.rowSpan = 0;
    } else if (index === 3) {
      obj.props.rowSpan = 4;
    }
    return obj;
  },
}, {
  title: 'Time',
  dataIndex: 'time',
  width: 60,
}, {
  title: 'Speaker',
  dataIndex: 'speaker',
  width: 80,
}, {
  title: 'Title',
  dataIndex: 'title',
  width: 200,
  render: (value, row, index) => {
    if (links2[index]) {
      return (<a href={links2[index]}>{value}</a>)
    } else {
      return (<p>{value}</p>)
    }
  }
}];

export const day1 = [{
  key: '1',
  session: 'Opening Remark',
  time: '13:30-13:40',
  speaker: 'W.Tang',
  title: 'Workshop Goals & Expectations',
}, {
  key: '2',
  session: 'Exascale Roadmap ',
  time: '13:40-14:10',
  speaker: 'Manish Parashar', //no pic
  title: 'Overview for US - NSF',
}, {
  key: '3',
  session: 'Exascale Roadmap ',
  time: '14:10-14:40',
  speaker: 'Depei Qian', 
  title: 'Overview for China',
}, {
  key: '4',
  session: 'Exascale Roadmap ',
  time: '14:40-15:10',
  speaker: 'Thomas Schulthess', 
  title: 'Overview for Europe',
}, {
  key: '5',
  session: 'Exascale Roadmap ',
  time: '15:10-15:40',
  speaker: 'Satoshi Sekiguchi',  //no pic
  title: 'Overview for Japan',
}, {
  key: '6',
  session: ' ',
  time: '15:40-15:50',
  speaker: ' ',
  title: 'Group Photo & Coffee Break',
}, {
  key: '7',
  session: 'system-1',
  time: '15:50-16:20',
  speaker: 'Pete Beckman', 
  title: 'Overview for US – DOE',
}, {
  key: '8',
  session: 'system-1',
  time: '16:20-16:50',
  speaker: 'Xuebin Chi (CAS-CNIC)/Zhong Jin', 
  title: 'China’s New Top500 #1 Candidate',
}, {
  key: '9',
  session: 'system-1',
  time: '16:50-17:20',
  speaker: 'Kengo Nakajima (U. Tokyo)',  //no pic
  title: 'Innovative Method for Integration of Data in the Exascale Era',
}, {
  key: '10',
  session: 'system-1',
  time: '17:20-17:50',
  speaker: 'Torsten Hoefler (ETH-Zurich)', 
  title: 'The Deep 500',
}, {
  key: '11',
  session: 'system-1',
  time: '17:50-18:20',
  speaker: 'Scott Klasky, ORNL, USA', 
  title: 'I/O & Data Reduction Co-Design Challenges at Extreme Scale',
}];

export const day2 = [{
  key: '1',
  session: 'Performance',
  time: '8:30-9:00',
  speaker: 'D.K. Panda, OSU, USA',
  title: 'Opportunities & Challenges for Middleware on Exascale Systems.',
}, {
  key: '3',
  session: 'Performance',
  time: '9:30-10:00',
  speaker: 'Prabhat, LBNL', // no pix
  title: 'AI/DL enabled advances in Climate Modeling',
}, {
  key: '4',
  session: '',
  time: '10:00-10:15',
  speaker: '',
  title: 'Coffee Break',
}, {
  key: '5',
  session: 'system-2',
  time: '10:15-10:45',
  speaker: 'Taisuke Boku, Japan',
  title: 'Hybrid Accelerated Parallel Computing: GPU+FPGA=?',
}, {
  key: '6',
  session: 'system-2',
  time: '10:45-11:15',
  speaker: 'Haohan Fu, Tsinghua, China', // no pix
  title: 'TaihuLight Vision and Plans',
}, {
  key: '7',
  session: 'system-2',
  time: '11:15-11:45',
  speaker: 'Franck Cappello, ANL',
  title: 'Progress in Reconfigurable Computing and FPGA Advances',
}, {
  key: '8',
  session: 'system-2',
  time: '11:45-12:15',
  speaker: 'Yutong Lu, Guanzhou SC',
  title: 'TH2A Vision and Plans',
}, {
  key: '9',
  session: '',
  time: '12:15-13:30',
  speaker: '',
  title: 'Lunch',
}, {
  key: '10',
  session: 'Algorithm',
  time: '13:30-14:00',
  speaker: 'David Keyes, KAUST, Saudi Arabia',
  title: 'Challenges & Opportunities for Adaptable Algorithms for Exascale Applications.',
}, {
  key: '11',
  session: 'Algorithm',
  time: '14:00-14:30',
  speaker: 'Sam Williams, LBNL', // no pic
  title: 'Algorithmic Challenges for Deep Learning',
}, {
  key: '12',
  session: 'Algorithm',
  time: '14:30-15:00',
  speaker: 'Guangming Tan, ICT-CAS',
  title: 'TBD',
}, {
  key: '13',
  session: '',
  time: '15:00-15:15',
  speaker: '',
  title: 'Coffee Break',
}, {
  key: '14',
  session: 'Application',
  time: '15:15-15:45',
  speaker: 'Tim Germann, LANL',
  title: 'Co-Design Center for Particle-Based Methods from Quantum to Classical, Molecular, to Cosmological',
}, {
  key: '15',
  session: 'Application',
  time: '15:45-16:15',
  speaker: 'James Lin, SJTU',
  title: 'AI-Enabled Advances in Leukemia Research',
}, {
  key: '16',
  session: 'Application',
  time: '16:15-16:45',
  speaker: 'William Tang, Princeton U',
  title: 'Accelerated Advances in AI/DL Disruption Studies',
}, {
  key: '17',
  session: 'Closing Comments',
  time: '',
  speaker: 'W. M. Tang, et al.',
  title: 'Summary',
}];

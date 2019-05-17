import React from 'react';
import { Row } from 'antd';
import Profile from './Profile';

import NinghuiSun from '../images/NinghuiSun.jpg';
import ZeyaoMo from '../images/ZeyaoMo.jpg';
import JamesLin from '../images/JamesLin.png';
import GuangmingTan from '../images/GuangmingTan.jpg';
import WilliamTang from '../images/WilliamTang.png';
import ThomasSchulthess from '../images/ThomasSchulthess.jpg';
import Boku from '../images/boku.jpg';
import RongTian from '../images/tr.jpg';
import XiaolinCao from '../images/XiaolinCao.jpg';
import YunquanZhang from '../images/YunquanZhang.jpg';
import LinboZhang from '../images/LinboZhang.jpg';
import XiaowenXu from '../images/XiaowenXu.jpg';
import WeiXue from '../images/WeiXue.jpg';
import ChaoYang from '../images/ChaoYang.jpg';
import ZhongJin from '../images/ZhongJin.jpg';
import LongWang from '../images/LongWang.jpg';
import HaihangYou from '../images/HaihangYou.jpg';
import YongDou from '../images/YongDou.jpg';
import SatoshiMatsuoka from '../images/SatoshiMatsuoka.jpg';
import XianghuiXie from '../images/XianghuiXie.jpg';
import PeteBeckman from '../images/PeteBeckman.jpg';
import XuebinChi from '../images/XuebinChi.jpg';
import DavidKeyes from '../images/DavidKeyes.jpg';
import ShengzhongFeng from '../images/ShengzhongFeng.jpg';


function General() {
  return (
    <Row type="flex" justify="space-around">
      <Profile src={NinghuiSun} cls="organizer" name="Ninghui Sun" aff="CAS-ICT" />
      <Profile src={ZeyaoMo} cls="organizer" name="Zeyao Mo" aff="CAEP-SCNS" />
      <Profile src={GuangmingTan} cls="organizer" name="Guangming Tan" aff="CAS-ICT" />
    </Row>
  )
};

function Local() {
  return (
    <Row type="flex" justify="space-around">
      <Profile src={JamesLin} cls="organizer" name="James Lin" aff="HPC-SJTU" />
    </Row>
  )
};

function ExecutiveComt() {
  return (
    <Row type="flex" justify="space-around">
      <Profile src={WilliamTang} cls="organizer" name="William Tang" aff="Overseas Chair" />
      <Profile src={ThomasSchulthess} cls="boardOrga" name="Thomas Schulthess" aff="Europe" />
      <Profile src={Boku} cls="boardOrga" name="Taisuke Boku" aff="Japan" />
      <Profile src={RongTian} cls="organizer" name="Rong Tian" aff="China" />
    </Row>
  )
};

function ProgramComt() {
  return (
    <div>
      <Row type="flex" justify="space-around">
        <Profile src={XiaolinCao} cls="organizer" name="Xiaolin Cao" aff="" />
        <Profile src={YunquanZhang} cls="organizer" name="Yunquan Zhang" aff="" />
        <Profile src={LinboZhang} cls="organizer" name="Linbo Zhang" aff="" />
        <Profile src={XiaowenXu} cls="organizer" name="Xiaowen Xu" aff="" />
      </Row>
      <Row type="flex" justify="space-around">
        <Profile src={WeiXue} cls="organizer" name="Wei Xue" aff="" />
        <Profile src={ChaoYang} cls="organizer" name="Chao Yang" aff="" />
        <Profile src={ZhongJin} cls="organizer" name="Zhong Jin" aff="" />
        <Profile src={LongWang} cls="organizer" name="Long Wang" aff="" />
      </Row>
      <Row type="flex" justify="space-around">
        <Profile src={HaihangYou} cls="organizer" name="Haihang You" aff="" />
        <Profile src={YongDou} cls="boardOrga" name="Yong Dou" aff="" />
        <Profile src={SatoshiMatsuoka} cls="organizer" name="Satoshi Matsuoka" aff="" />
        <Profile src={XianghuiXie} cls="organizer" name="Xianghui Xie" aff="" />
      </Row>
      <Row type="flex" justify="space-around">
        <Profile src={PeteBeckman} cls="organizer" name="Pete Beckman" aff="" />
        <Profile src={XuebinChi} cls="organizer" name="Xuebin Chi" aff="" />
        <Profile src={DavidKeyes} cls="organizer" name="David Keyes" aff="" />
        <Profile src={ShengzhongFeng} cls="organizer" name="Shengzhong Feng" aff="" />
      </Row>
    </div>
  )
}

class Organizers extends React.Component {
  render() {
    return (
      <div>
        <h2>Organizers</h2>
        <h3>General Chairman</h3>
        <General />
        <h3>General Chairman</h3>
        <Local />
        <h3>Executive Committee</h3>
        <ExecutiveComt />
        <h3>Program Committee</h3>
        <ProgramComt />
      </div> 
    )
  }
}

export default Organizers;
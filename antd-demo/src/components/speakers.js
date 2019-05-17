import React from 'react';
import { Divider } from 'antd';
import Card from './Card';

import WilliamTang from '../images/WilliamTang.png';
import DepeiQian from '../images/DepeiQian.jpg';
import ThomasSchulthess from '../images/ThomasSchulthess.jpg';
import PeteBeckman from '../images/PeteBeckman.jpg';
import XuebinChi from '../images/XuebinChi.jpg';
import ZhongJin from '../images/ZhongJin.jpg';
import TorstenHoefler from '../images/Torsten_Hoefler.jpg';
import ScottKlasky from '../images/ScottKlasky.png';
import DKPanda from '../images/dk_panda.jpg';
import Boku from '../images/TaisukeBoku.jpg';
import FranckCappello from '../images/Franck_Cappello.jpg';
import YutongLu from '../images/luyutong.jpg';
import DavidKeyes from '../images/David_Keyes.jpg';
import GuangmingTan from '../images/GuangmingTan.jpg';
import TimGermann from '../images/tim_germann.jpg';
import JamesLin from '../images/JamesLin.png';
import PlaceHolder from '../images/placeholder.png';

class Speakers extends React.Component {
  render() {
    return (
      <div>
        <p> &nbsp;</p>
        <h2>Invited Speakers</h2>
        <Divider />
          <Card 
            src={WilliamTang}
            cls="speaker"
            name="William Tang" 
            aff="USA"
            dpt="Professor, Department of Astrophysical Sciences, Plasma Physics Section; 
Executive Committee, Princeton Institute of Computational Science & Engineering, Princeton University and Principal Research Physicist, Princeton Plasma Physics Laboratory (PPPL)
tang@pppl.gov" />
        <Divider />
        <Card
          src={PlaceHolder}
          cls="placeholder"
          name="Manish Parashar"
          aff="NSF"
          dpt="parashar@ored.rutgers.edu "/>
        <Divider />
        <Card
          src={DepeiQian}
          cls="speaker"
          name="Depei Qian"
          aff="China"
          dpt="Professor, Department of Computer Science, BUAA
Director of Sino-German Joint Software Institute "/>
        <Divider />
        <Card
          src={ThomasSchulthess}
          cls="speaker"
          name="Thomas Schulthess"
          aff="Switzerland"
          dpt="Director of the Swiss National Supercomputing Centre (CSCS) at Lugano "/>
        <Divider />
        <Card
          src={PlaceHolder}
          cls="placeholder"
          name="Satoshi Sekiguchi"
          aff="Japan"
          dpt=""/>
        <Divider />
        <Card
          src={PeteBeckman}
          cls="speaker"
          name="Pete Beckman"
          aff=""
          dpt=""/>
        <Divider />
        <Card
          src={XuebinChi}
          cls="speaker"
          name="Xuebin Chi"
          aff="China"
          dpt=""/>
        <Divider />
        <Card
          src={ZhongJin}
          cls="speaker"
          name="Zhong Jin"
          aff="China"
          dpt=""/>
        <Divider />
        <Card
          src={PlaceHolder}
          cls="placeholder"
          name="Kengo Nakajima"
          aff="Japan"
          dpt=""/>
        <Divider />
        <Card
          src={TorstenHoefler}
          cls="speaker"
          name="Torsten Hoefler"
          aff="Germany"
          dpt="Assistant Professor
            Scalable Parallel Computing Lab
            Computer Science Department
            ETH Zurich
            Universitaetsstrasse 6
            CAB F 75
            8092 Zurich, Switzerland
            Office phone: +41 44 632 63 44 "/>
        <Divider />
        <Card
          src={ScottKlasky}
          cls="speaker"
          name="Scott Klasky"
          aff="USA"
          dpt="Distinguished Scientist and
            Group Leader for Scientific Data
            Oak Ridge National Laboratory
            Oak Ridge, TN, USA "/>
        <Divider />
        <Card
          src={DKPanda}
          cls="speaker"
          name="D.K. Panda"
          aff="USA"
          dpt="Dept. of Computer Science and Engineering
            Dreese Lab 785 
            The Ohio State University
            2015 Neil Avenue 
            Columbus, OH-43210, USA 
            Tel: (614) 292-5199
            Fax: (614) 292-2911
            Email: panda AT cse.ohio-state.edu 
            http://web.cse.ohio-state.edu/~panda/"/>
        <Divider />
        <Card
          src={PlaceHolder}
          cls="placeholder"
          name="Prabhat"
          aff=""
          dpt=""/>
        <Divider />
        <Card
          src={Boku}
          cls="speaker"
          name="Taisuke Boku"
          aff="Japan"
          dpt="Professor, Department of Computer Science, Center for Computational Sciences, University of Tsukuba "/>
        <Divider />
        <Card
          src={PlaceHolder}
          cls="placeholder"
          name="Haohan Fu"
          aff="China"
          dpt=""/>
        <Divider />
        <Card
          src={FranckCappello}
          cls="speaker"
          name="Franck Cappello"
          aff="USA"
          dpt="Co-Director of the INRIA-Illinois Joint Laboratory on PetaScale Computing
            cappello@mcs.anl.gov "/>
        <Divider />
        <Card
          src={YutongLu}
          cls="speaker"
          name="Yutong Lu"
          aff="China"
          dpt="Professor of college of computer science in NUDT
            Chief designer of Milky Way high performance systems"/>
        <Divider />
        <Card
          src={DavidKeyes}
          cls="speaker"
          name="David E. Keyes"
          aff="USA"
          dpt="Appl Phys & Appl Math 
            Columbia University
            200 S. W. Mudd Bldg., MC 4701 
            500 W. 120th Street 
            New York, NY, 10027
            dept:	(212) 854-4458
            fax:	(212) 854-8257
            david.keyes@columbia.edu
            http://www.columbia.edu/~kd2112/"/>
        <Divider />
        <Card
          src={PlaceHolder}
          cls="placeholder"
          name="Sam Williams"
          aff=""
          dpt=""/>
        <Divider />
        <Card
          src={GuangmingTan}
          cls="speaker"
          name="Guangming Tan"
          aff="China"
          dpt=""/>
        <Divider />
        <Card
          src={TimGermann}
          cls="speaker"
          name="Tim Germann"
          aff=""
          dpt="Los Alamos National Laboratory
            tcg@lanl.gov"/>
        <Divider />
        <Card
          src={JamesLin}
          cls="speaker"
          name="James Lin"
          aff="China"
          dpt=""/>
        <Divider />
      </div>
    );
  }
}

export default Speakers;
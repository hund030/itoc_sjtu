import React from 'react';
import { Divider } from 'antd';
import Card from './Card';

import WilliamTang from '../images/WilliamTang.png';
import ManishParashar from '../images/ManishParashar.jpg';
import DepeiQian from '../images/DepeiQian.jpg';
import ThomasSchulthess from '../images/ThomasSchulthess.jpg';
import PeteBeckman from '../images/PeteBeckman.jpg';
import XuebinChi from '../images/XuebinChi.jpg';
import ZhongJin from '../images/ZhongJin.jpg';
import TorstenHoefler from '../images/TorstenHoefler.jpg';
import ScottKlasky from '../images/ScottKlasky.jpg';
import DKPanda from '../images/dk_panda.jpg';
import FranckCappello from '../images/Franck_Cappello.jpg';
import YutongLu from '../images/YutongLu.jpg';
import DavidKeyes from '../images/DavidE_Keyes.jpg';
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
            dpt="Professor, Department of Astrophysical Sciences, Plasma Physics Section; <br/>
            Executive Committee, Princeton Institute of Computational Science & Engineering,
            Princeton University and Principal Research Physicist, Princeton Plasma Physics Laboratory (PPPL) 
            <br/>tang@pppl.gov" />
        <Divider />
        <Card
          src={ManishParashar}
          cls="speaker"
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
            <br/>Director of Sino-German Joint Software Institute "/>
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
          dpt="Assistant Professor<br/>
            Scalable Parallel Computing Lab<br/>
            Computer Science Department<br/>
            ETH Zurich<br/>
            Universitaetsstrasse 6<br/>
            CAB F 75<br/>
            8092 Zurich, Switzerland<br/>
            Office phone: +41 44 632 63 44 "/>
        <Divider />
        <Card
          src={ScottKlasky}
          cls="speaker"
          name="Scott Klasky"
          aff="USA"
          dpt="Distinguished Scientist and Group Leader for Scientific Data<br/>
            Oak Ridge National Laboratory<br/>
            Oak Ridge, TN, USA "/>
        <Divider />
        <Card
          src={DKPanda}
          cls="speaker"
          name="D.K. Panda"
          aff="USA"
          dpt="Dept. of Computer Science and Engineering<br/>
            Dreese Lab 785 <br/>
            The Ohio State University<br/>
            2015 Neil Avenue <br/>
            Columbus, OH-43210, USA <br/>
            Tel: (614) 292-5199<br/>
            Fax: (614) 292-2911<br/>
            Email: panda AT cse.ohio-state.edu <br/>
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
          dpt="Co-Director of the INRIA-Illinois Joint Laboratory on PetaScale Computing<br/>
            cappello@mcs.anl.gov "/>
        <Divider />
        <Card
          src={YutongLu}
          cls="speaker"
          name="Yutong Lu"
          aff="China"
          dpt="Professor of college of computer science in NUDT<br/>
            Chief designer of Milky Way high performance systems"/>
        <Divider />
        <Card
          src={DavidKeyes}
          cls="speaker"
          name="David E. Keyes"
          aff="USA"
          dpt="Appl Phys & Appl Math <br/>
            Columbia University<br/>
            200 S. W. Mudd Bldg., MC 4701 <br/>
            500 W. 120th Street <br/>
            New York, NY, 10027<br/>
            dept:	(212) 854-4458<br/>
            fax:	(212) 854-8257<br/>
            david.keyes@columbia.edu<br/>
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
          dpt="Los Alamos National Laboratory<br/>
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
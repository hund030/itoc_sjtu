import React from 'react';
import HPC from '../images/hpc_2016.png';

class Intro extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>Introduction</h1>
=======
        <h2>Introduction</h2>
        <p > &nbsp; </p>
>>>>>>> 7189a6d574313551547e1cc76365c773a2b0678a
        <p className="intro"> &nbsp;&nbsp;&nbsp;&nbsp; In the PC/single core times, we assumed flop is expensive. As such, the "best" practice having been followed up to date is to trade frequent memory access for reduced and saved flops; the philosophy of code/algorithm optimization is to reduce the number of flops. However, following the current trend of multi/many-core hardware change, flop is becoming the next round of "free lunch", whereas data movement appears to the new bottleneck because the energy consumed on data moment is 100X that on flop. Hence, from the viewpoint of hardware efficiency and energy effectiveness, the more flops per unit data movement, the merrier. For the future's extreme-scale application, it would be prone to adopt novel algorithms that can maximize the number of flops per unit data movement to take full advantage of the "free flop". This is in perfect contrast with the programming habit and the way of thinking in the past. The algorithm that was deemed to be expensive in the PC/single core times might be reversely a good candidate on the emerging computer architecture; tomorrow highly possibly would see a paradigm shift in defining what a "good" algorithm is. </p>
        <p className="intro"> &nbsp;&nbsp;&nbsp;&nbsp; As the power of modern super computing systems continues to advance at an exciting pace forward to extreme scales, it is quite clear that the associated numerical software development challenges are also increasingly formidable. On the emerging architectures, memory and data motion present increasingly serious bottlenecks as the required low-power consumption requirements lead to systems with significant restrictions on available memory and communications bandwidth. In consideration of the current trend of hardware change, if no change is made to the key numerical algorithm, the waste of the floating point capability seems unavoidable. Consequently, computational science experts in multiple application domains will need to re-visit key application algorithms and solvers with the likelihood that new capabilities will be demanded in order to keep up with the dramatic architectural changes that accompany the impressive increases in compute power. </p>
        <p className="intro"> &nbsp;&nbsp;&nbsp;&nbsp; Co-design, in the most basic sense, engages the necessary collaborations between hardware designers, computer scientists, applied mathematicians, and computational science experts in multiple application domains to carry out the essential interdisciplinary research that will enable harvesting in a timely way the scientific and technological benefits as HPC hardware moves forward to extreme scales. </p>
        <p className="intro"> &nbsp;&nbsp;&nbsp;&nbsp; Following the successes of CoDesign2011, 2012, 2013, 2014, 2015 and 2016, 2017, the eighth international workshop CoDesign 2018 will be held on October 18-20, 2018 in QingDao, ShanDong, China. It is an official part of HPC China as one of most important international events of the largest annual domestic conference on HPC in China. </p>
        <p className="intro"> &nbsp;&nbsp;&nbsp;&nbsp; The primary motivation for the international workshop is to enable productive and timely interdisciplinary discussions with focus on stimulating progress in domain applications that engage extreme-scale computing. This features new challenges and opportunities encountered in the development of software-hardware needed for computing at the extreme scale. By gathering insights from successful experiences in petascale applications, it is hoped that this workshop will help optimize a converged co-design path toward computing at the extreme scale and associated big data challenges. To provide some context and background information, the web-site for the previous international exascale Co-Design workshop hosted by China can be found at here. </p>
        <p > &nbsp; </p>
        <img src={HPC} id="hpc_pic" alt="hpc" />
      </div>
    )
  }
}

export default Intro;
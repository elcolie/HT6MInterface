import React from 'react';
import armsKMUTT from './Arms_of_KMUTT.png';
/*
* Dump component
* */
export default function welcomeFooter(props){
  return(
    <footer className='text-center'>
      <p>This work is a collaborative project between TINT, KMUTT, MSU, and PSU</p>
      <p>If you need further information, please contact <a href="mailto:tokamak@tint.or.th">tokamak@tint.or.th</a></p>
      
      <a href="/"><img className='logo' src={armsKMUTT} alt='logo'/></a>
      <a href="/"><img className='logo' src={armsKMUTT} alt='logo'/></a>
      <a href="/"><img className='logo' src={armsKMUTT} alt='logo'/></a>
      <a href="/"><img className='logo' src={armsKMUTT} alt='logo'/></a>
      
    </footer>
  )
}


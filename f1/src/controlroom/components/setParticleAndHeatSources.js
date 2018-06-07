import React, {Component, Fragment} from 'react';
import setParticleAndHeatSource from './setParticleAndHeatsources.png';
class ParticleAndHeatSources extends Component{
  render(){
    return(
      <Fragment>
        <h1 id={'set-particle-and-heatsources-params'}>Step 5/5: Set particle and heat sources at each time break points</h1>
        <img src={setParticleAndHeatSource} className={'intermediate-image'} alt={'set particle and heat sources'}/>
      </Fragment>
    )
  }
};

export default ParticleAndHeatSources;

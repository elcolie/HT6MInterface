import React, {Fragment} from 'react';
import setMachineParameter from "./setMachineParameters";
import SetPlasmaParameter from "./setPlasmaParameters";
import SetTransportParameter from "./setTransportParameters";
import ControlParameter from "./setControlParameters";
import Confirmation from "./comfirm";

const Intermediate = () => {
  return (
    <Fragment>
      {setMachineParameter()}
      <SetPlasmaParameter/>
      <SetTransportParameter/>
      <ControlParameter/>
      <Confirmation/>
    </Fragment>
  )
};

export default Intermediate;


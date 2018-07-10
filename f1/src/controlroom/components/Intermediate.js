import React, {Fragment} from 'react';
import SetMachineParameter from "./setMachineParameters";
import SetPlasmaParameter from "./setPlasmaParameters";
import SetTransportParameter from "./setTransportParameters";
import ControlParameter from "./setControlParameters";
import Confirmation from "./comfirm";

const Intermediate = () => {
  return (
    <Fragment>
      <SetMachineParameter/>
      <SetPlasmaParameter/>
      <SetTransportParameter/>
      <ControlParameter/>
      <Confirmation/>
    </Fragment>
  )
};

export default Intermediate;


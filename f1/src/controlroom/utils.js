import React from "react";
import {PARTICLE_HEATSOURCE_DEFAULT} from "../constants";
import {stringifyNumber} from "../utils";
import ParticleHeatForm from "./components/particleHeatForm";

export const setBreakPoint = (numberOfBreakPoints) => {
  let tmp = [];
  const objectTmp = Object.assign({}, PARTICLE_HEATSOURCE_DEFAULT);
  for (let i = 0; i < numberOfBreakPoints; i++) {
    tmp.push(objectTmp);
  }
  return tmp;
};

export const setBreakPointList = (numberOfBreakPoints) => {
  //This will be a state for component
  let tmp = [];
  for (let i = 1; i <= numberOfBreakPoints; i++) {
    tmp.push({
      title: stringifyNumber(i),
      breakPointNumber: i,
      content: <ParticleHeatForm breakPointNumber={i}/>
    })
  }
  return tmp;
};

import React from 'react';
import {setBreakPoint} from "./utils";

it('setBreakPoint must set', () => {
  const expectedState = [
    {
      breakPointNumber: 0,
      timeAtBreakPoint: 0.01,
    
      ionSpeciesOfTheSource: 'Hydrogen',
      rateOfParticleSource: 0.01,
      radialPosition: 0.00,
      radialWidth: 0.50,
    
      nbiTotalPower: 0.01,
      nbiRadialPosition: 0.01,
      nbiRadialWidth: 0.01,
    
      icrfTotalPower: 0.01,
      icrfRadialPosition: 0.01,
      icrfRadialWidth: 0.01
    
    },
    {
      breakPointNumber: 0,
      timeAtBreakPoint: 0.01,
    
      ionSpeciesOfTheSource: 'Hydrogen',
      rateOfParticleSource: 0.01,
      radialPosition: 0.00,
      radialWidth: 0.50,
    
      nbiTotalPower: 0.01,
      nbiRadialPosition: 0.01,
      nbiRadialWidth: 0.01,
    
      icrfTotalPower: 0.01,
      icrfRadialPosition: 0.01,
      icrfRadialWidth: 0.01
    
    }
  ];
  expect(JSON.stringify(setBreakPoint(2))).toBe(
    JSON.stringify(expectedState));
  
});

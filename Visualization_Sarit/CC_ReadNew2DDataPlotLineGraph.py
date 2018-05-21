#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May 20 19:27:21 2018

@author: Apiwat Wisitsorasak
"""
import ModulesInterfaceTASK as task
  
PathToDataFolder = "inHT6Ms302/"  # Path to a data folder containing TASK outputs
NewPrefix = "TimeRad2D_"

# Line plot rt1 TE
shortname      = "rt1"
filenameIN     = PathToDataFolder + NewPrefix + shortname + ".txt"
xlabel         = "R/a"
ylabel         = "TE [keV]"
GraphTitle     = "Electron Temperature Profile"
FigureFilename = PathToDataFolder + NewPrefix + shortname
Option         = 1
NoOfTimeSlices = 5
task.ReadNew2DDataAndDoLinePlot(filenameIN, FigureFilename, xlabel, ylabel, \
                                GraphTitle, NoOfTimeSlices, Option)

# Line plot rt5 NE
shortname      = "rt5"
filenameIN     = PathToDataFolder + NewPrefix + shortname + ".txt"
xlabel         = "R/a"
ylabel         = "NE [10**20 m**-3]"
GraphTitle     = "Electron Density Profile"
FigureFilename = PathToDataFolder + NewPrefix + shortname
Option         = 1
NoOfTimeSlices = 5
task.ReadNew2DDataAndDoLinePlot(filenameIN, FigureFilename, xlabel, ylabel, \
                                GraphTitle, NoOfTimeSlices, Option)


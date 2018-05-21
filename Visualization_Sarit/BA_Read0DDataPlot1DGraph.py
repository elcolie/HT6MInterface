#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May 8 18:15:39 2018

@author: Apiwat Wisitsorasak

This script converts the TASK/TR 2D data to a new simple format. 
"""
import ModulesInterfaceTASK as task

PathToDataFolder = 'inHT6Ms302/'  # Path to a data folder containing TASK outputs

# Load 0D Data and plot it in a simple 1D graph
    
# Plot gt1 NE0
shortname        = 'gt1'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'NE [10**20 m**-3]'
Title            = 'Central Electron Density vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt2 ND0
shortname        = 'gt2'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'ND [10**20 m**-3]'
Title            = 'Central Deuterium Density vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt5 <NE>
shortname        = 'gt5'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = '<NE> [10**20 m**-3]'
Title            = 'Average Electron Density vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt6 <ND>
shortname        = 'gt6'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = '<ND> [10**20 m**-3]'
Title            = 'Average Deuterium Density vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt9 TE0
shortname        = 'gt9'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'TE0 [keV]'
Title            = 'Central Electron Temperature vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt10 TD0
shortname        = 'gt10'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'TD0 [keV]'
Title            = 'Central Deuterium Temperature vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt13 <TE0>
shortname        = 'gt13'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = '<TE> [keV]'
Title            = 'Average Electron Temperature vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt14 <TD>
shortname        = 'gt14'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = '<TD> [keV]'
Title            = 'Average Deuterium Temperature vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt33 WTOT
shortname        = 'gt33'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'WTOT [MJ]'
Title            = 'Plasma-Stored Energy vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt81 TE89
shortname        = 'gt81'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'Tau-89 [s]'
Title            = 'Confinement Time (Tau-89) vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)

# Plot gt86 ZEFF
shortname        = 'gt86'
filename_RawData = PathToDataFolder + shortname + '.txt'
XLabel           = 'Time [s]'
YLabel           = 'ZEFF'
Title            = 'Effective Charge vs Time' 
FigureName       = PathToDataFolder + shortname 
Option           = 1
task.Read0DDataPlot1DGraph(filename_RawData, XLabel, YLabel, Title, FigureName, Option)


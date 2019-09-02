import  React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import './App.css';

class App extends Component  {
  static defaultProps = {
    omegas: [
      {
        alias: "Monarch",
        realName: "Jamie Braddock",
        omegaPower: "Quantum Reality Manipulation",
        affiliation: "None",
      },{
        alias: "Iceman",
        realName: "Robert 'Bobby' Drake",
        omegaPower: "Negative Temperature Manipulation",
        affiliation: "X-Men/Krakoa",
      },
      {
        alias: "Elixir",
        realName: "Joshua Foley",
        omegaPower: "Biokinesis",
        affiliation: "Krakoa",
      },
      {
        alias: "Marvel Girl",
        realName: "Jean Grey",
        omegaPower: "Telepathy",
        affiliation: "X-Men/Krakoa",
          },
      {
        alias: "Legion",
        realName: "David Haller",
        omegaPower: "Power Manifestation",
        affiliation: "Unknown",
      },
      { 
        alias: "Magento",
        realName: "Erik Lehnsherr",
        omegaPower: "Magnetism",
        affiliation: "X-Men/Krakoa",
      },
      {
        alias: "Proteus",
        realName: "Kevin MacTaggert",
        omegaPower: "Psionic Reality Manipulation",
        affiliation: "Krakoa",
      },
      {       
        alias: "Mister M",
        realName: "Absalon Mercator",
        omegaPower: "Matter Manipulation",
        affiliation: "Uknown",
      },
      {
        alias: "Storm",
        realName: "Ororo Munroe",
        omegaPower: "Weather Manipulation",
        affiliation: "X-Men/Krakoa",
      },
      { 
        alias: "Exodus",
        realName: "Bennet du Paris",
        omegaPower: "Telekenesis",
        affiliation: "None",
    },
    {
      alias: "Kid Omega",
      realName: "Quentin Quire",
      omegaPower: "Telepathy",
      affiliation: "Krakoa",
    },
    {
      alias: "Powerhouse",
      realName: "Franklin Richards",
      omegaPower: "Universal Reality Manipulation",
      affiliation: "Fantastic Four/Humanity",
    },
    {
      alias: "Vulcan",
      realName: "Gabriel Summers",
      omegaPower: "Energy Manipulation",
      affiliation: "Krakoa",
    },
    {
      alias: "Hope",
      realName: "Hope Summers",
      omegaPower: "Power Manipulation",
      affiliation: "Krakoa",
    },
    ]
  }
  render() {
    
    return (
      <div>
      <Navbar omegas={this.props.omegas} />
      <Routes omegas={this.props.omegas} />
      </div>
    )
  } 
}

export default App;

import React, { Component } from 'react';

import { Input } from '../components//Input';
import { Panel } from "../containers/Panel";
import  Info  from "../containers/Info";

class Main extends Component{
  render()
  {
    return (
      <Info style={{display: "flex", flexFlow: "wrap raw", alignContent: "flexStart"}}/>
    );
  }
}

export default Main;
import styled, { css }from 'styled-components';
import React, { Component } from 'react';
import { Avatar } from '../components/Avatar'
import { Txt} from "../components/Button";
import { Panel } from "./Panel";

class Info extends Component{
  render(){
    return(
        <Panel>
        <Avatar />
          <Txt>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores magnam nisi numquam omnis! Ab accusamus alias amet cum cupiditate dignissimos, eligendi est eum illo quas tempore unde velit veritatis, voluptas.
          </Txt>
        </Panel>

    );
  }
}

export default Info;


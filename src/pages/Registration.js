import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Button, Txt } from '../components/Button';
import { Input } from '../components//Input';
import { Wrapper } from "../containers/Wrapper";
import { Panel } from "../containers/Panel";

class Registration extends Component{
    render()
    {
        return (
            <Panel>
                <Wrapper>
                    <Button>
                        <Txt>
                            Create Account
                        </Txt>
                    </Button>
                    <Button>
                        <Txt>
                        Sign In
                        </Txt>
                    </Button>
                </Wrapper>
                <Input placeholder="Email adress"/>
                <Input last placeholder="Password"/>
                <Button transparent>
                    <Txt>
                        Sign In
                    </Txt>
                </Button>
            </Panel>

        );
    }
}
export default Registration;
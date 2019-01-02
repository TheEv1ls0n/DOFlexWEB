import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../components/Button';
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
                        Create Account
                    </Button>
                    <Button>
                        Sign In
                    </Button>
                </Wrapper>
                <Input />
                <Input />
                <Button transparent>
                    Sign In
                </Button>
            </Panel>

        );
    }
}
export default Registration;
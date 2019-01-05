import React, { Component } from 'react';

import { Button, Txt } from '../components/Button';
import { Input } from '../components//Input';
import { Wrapper } from "../containers/Wrapper";
import { Panel } from "../containers/Panel";

class Registration extends Component{
    render()
    {
        return (
            <Panel regwindow>
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
                <Input first placeholder="Login"/>
                <Input placeholder="Name"/>
                <Input placeholder="Password"/>
                <Input placeholder="Repeat Password"/>
                <Input placeholder="Email"/>
                <Button create>
                    <Txt>
                        Create Account
                    </Txt>
                </Button>
            </Panel>
        );
    }
}

export default Registration;
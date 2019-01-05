import React, { Component } from 'react';

import { Button, Txt } from '../components/Button';
import { Input } from '../components//Input';
import { Wrapper } from "../containers/Wrapper";
import { Panel } from "../containers/Panel";

class Login extends Component{
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
                    <Input first placeholder="Email adress"/>
                    <Input placeholder="Password"/>
                    <Button sign>
                        <Txt>
                            Sign In
                        </Txt>
                    </Button>
                </Panel>
        );
    }
}

export default Login;
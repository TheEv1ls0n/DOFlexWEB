import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../components/Button';


class Registration extends Component{
    render()
    {
        return (
            <div>
                <Button>
                    Create Account
                </Button>
                <Button>
                    Sign In
                </Button>
            </div>
        );
    }
}
export default Registration;
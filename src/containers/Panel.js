import React from "react";
import { Button, Txt } from '../components/Button';
import { Input } from '../components//Input';
import { Wrapper } from "../containers/Wrapper";

function Panel(props) {
  return(
    <div class = "panel">
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
      <RegForm />
    </div>
  )
}

function RegForm(props) {
  return(
    <div class ="registration">
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
      </div>
  )
}
function  LogForm() {
  return(
    <div >
        <Input first placeholder="Email adress"/>
        <Input placeholder="Password"/>
        <Button sign>
          <Txt>
            Sign In
          </Txt>
        </Button>
      </div>
  )
}
export default Panel;
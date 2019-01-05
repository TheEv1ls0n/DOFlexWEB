import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Login from './pages/Login';
import Registration from './pages/Registration'
import {GlobalStyles} from "./Theme";
import Main from "./pages/Main";


class App extends React.Component {
    render = () => {

        return(
            <React.Fragment>
                <GlobalStyles />
                <Login />
                <Registration />
                <Main />
            </React.Fragment>
        );

    };

}

ReactDOM.render(< App/>, document.getElementById('root'));

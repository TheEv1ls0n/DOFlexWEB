import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Main from './pages/Main';

class Window extends React.Component {
    render = () => <div className="reg-form"></div>

}

ReactDOM.render(< Registration/>, document.getElementById('root'));

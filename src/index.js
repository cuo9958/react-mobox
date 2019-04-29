import React from 'react';
import ReactDOM from 'react-dom';
import models from './models';
import { Provider } from 'mobx-react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import './base.less';

import * as serviceWorker from './serviceWorker';

class Main extends React.Component {

    render() {
        return <Provider {...models}>
            <BrowserRouter>
                {Routes()}
            </BrowserRouter>
        </Provider>
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();

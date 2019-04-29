import React from 'react';
import { inject } from 'mobx-react';

@inject(models => ({
    att1: models.test.att1
}))
class Home extends React.Component {

    render() {
        return <div className="test1">
            test:home{this.props.att1}
        </div>
    }
}
export default Home;
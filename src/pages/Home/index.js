import React from 'react';
import { inject } from 'mobx-react';
import TextCom from '../../components/TestCom';
import { Link } from 'react-router-dom';

@inject(models => ({
    att1: models.test.att1
}))
class Home extends React.Component {

    render() {
        return <div className="test1">
            test:home{this.props.att1}
            <div>
                <TextCom />
            </div>
            <div>
                <Link to="test">测试点击</Link>
            </div>
        </div>
    }
}
export default Home;
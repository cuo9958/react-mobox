import React from 'react';
import { inject } from 'mobx-react';
import TextCom from '../../components/TestCom';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

@inject(models => ({
    att1: models.test.att1
}))
class Home extends React.Component {

    render() {
        return <div className="test1">
            test{this.props.att1}
            <div>
                <TextCom />
            </div>
            <div>
                <Link to="/">测试点击</Link>
            </div>
            <div>
                <Button type="primary">测试按钮</Button>
                <Icon type="step-forward" />
            </div>
        </div>
    }
}
export default Home;
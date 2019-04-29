import React from 'react';
import { inject } from 'mobx-react';
import { List } from 'antd';

@inject(models => ({
    att1: models.test.att1
}))
class BaseList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: 1,
                title: "ceshi"
            }, {
                id: 1,
                title: "ceshi"
            }, {
                id: 1,
                title: "ceshi"
            }]
        }
    }
    render() {
        return <div className="test1">
            <List
                header={<div>Header</div>}
                bordered
                dataSource={this.state.list}
                renderItem={this.renderItem}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
            />
        </div>
    }

    renderItem = (item, index) => {
        return <List.Item>
            {item.title}
        </List.Item>
    }
}
export default BaseList;
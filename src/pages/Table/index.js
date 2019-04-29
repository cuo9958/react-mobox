import React from 'react';
import { inject } from 'mobx-react';
import { Table, Divider, Icon, Button } from 'antd';

const { Column } = Table;

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

@inject(models => ({
    att1: models.test.att1
}))
class TableList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: []
        }
    }
    render() {
        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
        }
        return <div className="test1">
            <Table rowSelection={rowSelection} dataSource={data} >
                <Column
                    title="年龄"
                    dataIndex="age"
                    key="age"
                />
                <Column
                    title="地址"
                    dataIndex="address"
                    key="address"
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Button.Group size="small">
                            <Button type="primary"><Icon type="edit" />编辑</Button>
                            <Button type="primary">
                                <Icon type="delete" />删除
                            </Button>
                        </Button.Group>
                    )}
                />
            </Table>
        </div >
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
}
export default TableList;
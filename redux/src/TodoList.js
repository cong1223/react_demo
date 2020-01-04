import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from "antd";
import store from "./store";
const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);
        this.addItem = this.addItem.bind(this);
        store.subscribe(this.storeChange)
    }
    onChangeInputValue(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    storeChange() {
        this.setState(store.getState());
    }

    addItem() {
        const action = {type: 'addItem'}
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <Input placeholder={this.state.inputValue}
                       style={{width: '250px'}}
                       onChange={this.onChangeInputValue}></Input>
                <Button type='primary' onClick={this.addItem}>增加一条</Button>
                <div style={{margin: '10px',width: '300px'}}>
                    <List bordered
                          dataSource={this.state.list} renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)} />
                </div>
            </div>
        );
    }
}

export default TodoList;
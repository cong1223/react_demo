import React, {Component} from 'react';
import {Button, Input, List} from "antd";
import 'antd/dist/antd.css'

const TodoListUi = (props) => {
    return (
        <div>
            <Input placeholder={props.inputValue}
                   style={{width: '250px'}}
                   onChange={props.onChangeInputValue}></Input>
            <Button type='primary' onClick={props.addItem}>增加一条</Button>
            <div style={{margin: '10px',width: '300px'}}>
                <List bordered
                      dataSource={props.list} renderItem={(item,index)=>(<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>)} />
            </div>
        </div>
    );
}

export default TodoListUi;
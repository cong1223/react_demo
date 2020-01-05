import React, {Component} from 'react';
import store from "./store";
import {changeInputAction,addItemAction,deleteItemAction,getListAction,getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
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
        this.deleteItem = this.deleteItem.bind(this);
        this.onChangeInputValue = this.onChangeInputValue.bind(this);
        store.subscribe(this.storeChange)
    }
    onChangeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }
    storeChange() {
        this.setState(store.getState());
    }

    addItem() {
        const action = addItemAction();
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI inputValue={this.state.inputValue}
                        list={this.state.list}
                        deleteItem={this.deleteItem}
                        addItem={this.addItem}
                        onChangeInputValue={this.onChangeInputValue} />
        );
    }

    componentDidMount() {
        // 不使用thuck中间件   redux的中间件,不是react的中间件
        // axios.get('https://douban.uieee.com/v2/movie/in_theaters').then(res => {
        //     console.log(res);
        //     let data = res.data.subjects;
        //     const action = getListAction(data);
        //     store.dispatch(action)
        // })

        // 使用thunk中间件
        const action = getTodoList();
        store.dispatch(action)
    }
}

export default TodoList;
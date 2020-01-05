import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

// 相当于所有子组件公用顶层的数据,props都能拿到值
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

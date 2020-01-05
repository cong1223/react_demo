import { createStore,applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import thunk from 'redux-thunk'  //使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由
import reducer from './reducer'
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer);// 创建数据存储仓库
export default store
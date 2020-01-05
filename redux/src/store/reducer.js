import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};
export default (state = defaultState,action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        let tempList = newState.list;
        tempList.splice(action.index,1);
        newState.list = tempList;
        return newState;
    }
    if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        let list = [];
        list = action.data.map(item => item.title);
        newState.list = list //复制性的List数组进去
        return newState
    }
    return state;
}
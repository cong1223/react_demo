const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};
export default (state = defaultState,action) => {
    console.log('Redux',state,action)
    if (action.type == 'change_input_value') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type == 'addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type == 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state));
        let tempList = newState.list;
        tempList.splice(action.index,1);
        newState.list = tempList;
        return newState;
    }
    return state;
}
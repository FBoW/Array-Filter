function createStore(initState){
    var state  = initState || {};
    var listFn = [];
    function getState(type){
        return state[type];
    }

    function dispatch(action){
        state[action.type] = action.value;
        listFn.forEach(function(ele){
            ele();
        })
    }

    function subscribe(fn){
        listFn.push(fn);
    }
    return {
        getState : getState,
        dispatch : dispatch,
        subscribe : subscribe
    }
}

var store = createStore({
    text : '',
    gender : 'a'
});
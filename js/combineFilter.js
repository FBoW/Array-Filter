function comBineFilter(config){
    return function(filterArr){
        for(var prop in config){
            filterArr = config[prop](filterArr,store.getState(prop));
        }
        return filterArr;
    }
}

var lastFilterArr = comBineFilter({
    text : filterArrByText,
    gender : filterArrByGender
});
//文本过滤函数
function filterArrByText(filterArr,text){
    if(!text){
        return filterArr;
    }else{
        return filterArr.filter(function(ele,index,self){
            return ele.name.indexOf(text) != -1;
        })
    }
}
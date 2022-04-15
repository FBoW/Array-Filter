function filterArrByGender(filterArr,gender){
    if(gender == 'a'){
        return filterArr;
    }else{
        return filterArr.filter(function(ele,index,self){
            return ele.gender == gender;
        })
    }
}
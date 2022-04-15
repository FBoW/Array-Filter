var personArr = [
    {name : '周扒皮', gender : 'm', age : 80, src : './images/头像 男孩.png',des : '吃人不吐骨头'},
    {name : '周慧敏', gender : 'f', age : 19, src : './images/头像 女孩.png', des : '冰清玉洁'},
    {name : '李白', gender : 'm', age : 32, src : './images/头像 男孩.png', des : '意气风发'},
    {name : '福贵', gender : 'm', age : 50, src : './images/头像 男孩.png', des : '苦'},
    {name : '李清照', gender : 'f', age : 22, src : './images/头像 女孩.png', des : '凄凄惨惨戚戚'},
];

store.subscribe(function(){
    render(lastFilterArr( personArr) );
});

//初始化变量
var oUl = document.getElementsByTagName('ul')[0],
    oInp = document.getElementsByClassName('inp')[0],
    oSpanArr = [].slice.call(document.getElementsByClassName('btn'),0);
    

function render(renderArr){
    var htmlStr = '';
    oUl.innerHTML = '';
    renderArr.forEach(function(ele,index,self){
        htmlStr += '<li><img src=" '+ ele.src+'"><p class="name">'+ ele.name +'</p><p class="des">'+ ele.des +'</p></li>'
    })
    oUl.innerHTML = htmlStr;
}

render(personArr);

//输入事件   通过文本过滤
oInp.oninput = debounce(function(){
    // state.text = this.value;
    store.dispatch({type : 'text',value : this.value});
},500);



//点击事件  通过切换性别过滤
var activeIndex = oSpanArr[2];
oSpanArr.forEach(function(ele,index,self){
    ele.onclick = function(){
        store.dispatch({type : 'gender',value : this.getAttribute('gender')});
        changeIndex(this);
    }
});
function changeIndex(curIndex){
    curIndex.className = 'btn selected';
    activeIndex.className = 'btn';
    activeIndex = curIndex;
}

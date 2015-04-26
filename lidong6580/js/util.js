/**
 * Created by lidong on 15/4/24.
 */
//判断arr是否为一个数组，返回一个bool值
function isArray(arr){
    return arr instanceof(Array);

}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
    return typeof fn == 'function';

}

function isDate(date){
    return Object.prototype.tostring.call(fn) === "[object Function]";
}

//使用递归来实现一个深度克隆，可以复制一个目标，返回一个人完整拷贝
//被复制的对象类型会被限制为数字，字符串，布尔，日期，数组，object对象。不会包含函数，正则对象等
function cloneObject(src){

    //数组
    if(isArray(obj)){
        var thisarray obj.valueOf();
        var newarray = [];
        for (var i=0;i<thisarray.length;i++){
            newarray.push(cloneObject(thisarray[i]));
        }
        return newarray;
    }
    //数字 ，布尔值，字符串
    if(tyoeof obj==="number" || tyoeof obj ==="boolean" || typeof obj==="string"){
        return obj.valueOf();
    }
    //日期

    //onject
    if (typeof obj === "object"){
        var Constructor = obj.constructor;
        var newobj = new Constructor();
        for(var attr in obj {
            if(obj.hasOwnProperty(attr)){
                if(obj[attr] === null){
                    newobj[attr]=null;
                }
                else{
                    newobj[obj]=cloneObject(obj[attr]);
                }
            }
        })
    }
    return newobj;

};
//对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr){
    if(!isArray(arr)){
        return arr;
    }
    var new_array=[];
    for(var i=0;i<arr.length;i++){
        if(new_array.indexOf(arr[i])<0){   //如果要检索的字符串没有出现，则该方法（indexOf）返回-1
            new_array.push(arr[]);
        };
    }
    return new_array;

}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

//对字符串头尾进行空格字符的去除，包括全椒半角空格，Tab等，返回一个字符串
function trim(str){
    if(!typeof str ==="string"){
        return str;
    }
    if(str[0] ===" "|| str[0]==="  " || str[0]==="   "){
        str=trim(str.slice(0,str.length));
    }
    if(str[str.length-1]===" " ||str[str.length-1]===" " || str[str.length-1]==="   "){
        str=trim(str.slice(0,str.length-1));
    }
    return str;
}
// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

//实现一个遍历数组的方法，针对数组中的每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr,fn){

    if(!isArray(arr)){
        return false;
    }
    if(!isFunction(fn)){
        return false;
    }
    for(var i=0;i<arr.length;i++){
        fn(arr[i],i);
    }


}
// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

//获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj){
    if(!typeof obj==="string" ){
        return false;
    }
    var key,counter=0
    for (key in obj){
        counter++;
    }
    return counter;

}
//使用一个示例
var obj={
    a:1,
    b:2,
    c:{
        c1:3,
        c2:4,
    }

};
console.log(getObjectLength(obj));//3

//学习正则表达式，在util.js完成以下代码

//判断是否为邮箱地址
function isEmail(emailStr){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);

}

//判断是否为手机号
function isMobilePhone(phone){
    var reg = /^1[3458][0-9]\d{8}$/;
    return reg.test(phone);

}

//DOM

//为element增加一洗个样式名为newClassName的新样式
function addClass(element,newClassName){
    ele.className=ele.className+" "+classname;
}

//移除element元素中的样式oldClassname
function removeClass(element,oldClassName){
    if(！element){
        return;

    }
    if(element.classList){
        element.classList.remove(oldClassName)
    }
    else{
        if(!hasClass(element,oldClassName)){
            var reg = new RegExp('(\\s|^)' + oldClassName + '(\\s|$)');
            element.className = element.className.replace(reg, ' ');
        }
    }

}
//判断siblingNode和element是否为同一个元素下的同一级的元素，返回bool值
function isSilblingNode(element,siblingNode){
    var nodelist = element.parentNode.childNodes;
    for(var i=0; i<nodelist.length;i++){
        if(nodelist[i] == siblingNode){
            return true;
        }
    }
    return false;
}
//获取element相对于窗口的位置，返回一个对象{x,y}
function getPosition(){
    var x=document.body.scrollTop;
    var y=document.body.scrollLeft;
    return{
        x:x,
        y:y
    };
}
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event,listener,false);
}

// 例如：
function clicklistener(event) {
    addEvent(elment,"click",listener)

}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    element.removeEventListener(event,listener,false);
}
//实现对ckick事件的绑定
function addClickEvent(element,listener){
    addEvent(element,"click",listener);

}
//实现对Enter时间的绑定
function addEnterEvent(ele,listerner) {
    ele.onkeydown= function (event) {
        var e=event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
            listerner();
        }
    }

}
//学习使用事件代理
function delegateEvent(element,tag,eventName,listener){
    $.on(element,eventName,function(){
        var e =argument[0] || window.event,
            target= e.srcElement ? e.srcElement : e.target;
        if(target.tagname == tag || target.targetName.toLowerCase()==tag){
            listener();
        }
    })
}
$.delegate=delegateEvent();

//使用示例
//实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"),"li","click","clickHandle")

//判断是否为IE浏览器，返回-1或者版本号
function isIE(){
    if(window.ActiveXObject){
        return navigator.userAgent.slice(8,11);
    }else{
        return -1;
    }
}
//设置cookie
function setCookie(cookieName,cookieValue,expiredays){
    document,cookie=name+"="+value+";expires="+expire;

}
//获取cookie值

function getCookie(name) {
    var cookie = document.cookie.split(";");
    var value;
    each(cookie,function(item,index){
        if(trim(item.split("=")[0]) == name){value = item.split("=")[1];
            }
        })
    return value;
    }
//学习ajax,并尝试自己封装一个Ajax方法。实现如下方法：
function ajax(url,option){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status=200 && option.hasOwnProperty("onsuccess"))
        {
            options.onsuccess(xhr.reponseText.xhr);
        }
        if(xmlhttp.status=404 && option.hasOwnProperty("onfail")){
            option.onfail(xhr.responseText,xhr);
        }
    }

    var data="";
    if(option.hasOwnProperty("data")){
        for(var attr in options.data){
            data=data+attr+"="+option.data[attr]+"&"
        }
        data=data.slice(0,data,length-1);
    }
    if(option.hasOwnProperty("type")){
        if(option.type==="POST" || option.type.toUpperCase()==="POST"){
            var method="POST";
            var ajaxurl=url;
            xhr.open(method,ajaxurl,true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(data);

        }else{
            var metheod="GET";
            var ajaxurl=url+data;
            xhr.open(method,ajaxurl,true);
            xhr.send();
        }
    }

}

//使用示例
ajax('http://localhost:8080/server/ajaxtest',{
    data:{
        name:'simon',
        passworld:'123456'
    },
    onsuccess:function(responseText,xhr){
        console.log(responseText);
    }
}
);

//option是一个对象，里面可以包括的参数为：
//type:post或者get,可以有一个默认值
//data:发送的数据，为一个键值对象或者一个用&连接的赋值字符串
//onsuccess:成功时的调用函数
//onfail:失败时的调用函数
//切换图片
let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc ==='images/wtfx.png'){
        myImage.setAttribute('src','images/czbh.png');
    } else {
        myImage.setAttribute('src','images/wtfx.png');
    }
}
//添加个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//添加函数
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null){
        setUserName();
    } else { 
      localStorage.setItem('name',myName);
      myHeading.textContent = 'Mozilla 酷毙了,' + myName;
    }
}
//获取保存用户名
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了,' + storedName;
}
//绑定按钮
myButton.onclick = function() {
    setUserName();
}
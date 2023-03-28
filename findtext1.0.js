var styles = '\
  #tboxid {\
    position: fixed;\
    top: 0;\
    right: 0;\
    margin: 0;\
    text-align: left;\
    z-index: 2147483647;\
    color: #000;\
    border-bottom: 1px solid #ccc;\
    border-bottom: 1px solid rgba(0,0,0,0.3);\
    padding: 0px 0px;\
    opacity: 0.9;\
    float: right;\
    clear: both;\
    overflow: hidden;\
    font-size: 20px;\
    font-family: Arial, Verdana, Georgia, Serif;\
    white-space: pre-wrap;\
    min-width: 0px;\
    outline: 0;\
    -webkit-box-shadow: 0px 2px 8px rgba(0,0,0,0.2);\
    -moz-box-shadow: 0px 2px 8px rgba(0,0,0,0.3);\
  }\
  \
  #tboxid small {\
    letter-spacing: -0.12em;\
    color: #444;\
  }'
box = document.createElement('tbox');
box.id = 'tboxid';
function addStyle() {
  var head = document.getElementsByTagName('head')[0];
 // if (head) {
   //console.log("ok");
 // var style = document.createElement("style");
   //style.type = "text/css";
   // style.appendChild(document.createTextNode(css));
    //head.appendChild(style);

 //const styleElement = document.createElement('style');
//styleElement.textContent = styles;
//document.head.appendChild(styleElement);
document.documentElement.appendChild(box);

 box.innerHTML = "";
 box.style.position= "fixed";
box.style.top = "3000";
//box.style.left = "0";
   box.style.right= "0";
  box.style.width= "300px";
  //box.style.border= 3px solid #73AD21;
   box.style.zIndex = "9999";
  box.style['top'] = '';
   box.style.display = 'block';
   box.style.fontSize = '20px';

   box.style['background-color'] = "#fff";
document.getElementById(box.id).style.color = "blue";
}

addStyle();
var ic=[];
var keyC=[];
var di=0;
document.addEventListener('keydown', (event) => {
console.log(event.key);
 
  if (event.keyCode>47&&event.keyCode<58||event.keyCode=="189"||event.keyCode>"64"&&event.keyCode<"91") { 
  
    keyC.push(event.key);
    //console.log(event.key);
    
  
    //document.getEl  keyC= String.fromCharCode(event.keyCode);ementById(box.id).style.display = 'block';
   //document.getElementById(box.id).style.color = "blue";
  // keyC= String.fromCharCode(keyC);
   //console.log(keyC);
    document.getElementById(box.id).innerHTML = keyC.join('');
   
  }
 
  if(event.key=="Backspace"){
   keyC.pop();
   document.getElementById(box.id).innerHTML = keyC.join('');

   //if(keyC.join('')=="123")document.getElementById(box.id).style.color = "red";
 // document.getElementById(box.id).style.display = 'none';

   //keyC = "";
   console.log(keyC);
   clearInterval(intervalId);
  }
//Enter
 if(event.key=="Enter"){
/*
var table = document.getElementById("OnMachine");
var searchText = keyC.join('');
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
 
  if (cells[i].innerHTML.indexOf(searchText) !== -1) {
    cells[i].style.backgroundColor = "yellow";

    cells[i].scrollIntoView();

  }
}

*/

  var table = document.getElementById("OnMachine");
var searchText = keyC.join('').toLowerCase(); // 将搜索文本转换为小写字母
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  var cellText = cells[i].innerHTML.toLowerCase(); // 将单元格文本转换为小写字母
  if (cellText.indexOf(searchText) !== -1) {
   ic.push(i);

    cells[i].style.backgroundColor = "yellow";
    cells[i].scrollIntoView();
  }
}
console.log(ic);
  
 }


 
});


var intervalId = setInterval(function() {
 
  // code to be executed every 20 seconds
var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < ic.length; i++) {
  
    cells[ic[i]].style.backgroundColor = "";
 }
 
 console.log("clean");


}, 2000);

//clearInterval();

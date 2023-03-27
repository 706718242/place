var styles = '\
  #type-ahead-box {\
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
  #type-ahead-box small {\
    letter-spacing: -0.12em;\
    color: #444;\
  }'
box = document.createElement('tbox');
box.id = 'tboxid';
function addStyle(css) {
  var head = document.getElementsByTagName('head')[0];
 // if (head) {
   //console.log("ok");
    //var style = document.createElement("style");
    //style.type = "text/css";
   // style.appendChild(document.createTextNode(css));
    //head.appendChild(style);

 
 document.documentElement.appendChild(box);

 box.innerHTML = "flex";
box.style.position = "fixed";
box.style.top = "3000";
//box.style.left = "0";
   box.style.right= "0";
  box.style.width= "300px";
  //box.style.border= 3px solid #73AD21;
box.style.zIndex = "9999";
  box.style['top'] = '';
     box.style.display = 'block';
 //  box.style.display = 'none';
   box.style['background-color'] = "#fff";

// var sel = search.range.getBoundingClientRect();
    //if (sel.right >= box.offsetLeft && sel.top <= box.offsetTop + box.offsetHeight) {
     // topval = (sel.bottom + 10);
     // box.style['top'] = ((topval < 100) ? topval : 100)  + 'px';
    //}

   
 // }
}

addStyle(styles);

var keyC=[];
var di=0;
document.addEventListener('keydown', (event) => {
 
  if (event.keyCode>47&&event.keyCode<58||event.keyCode=="189"||event.keyCode>"64"&&event.keyCode<"91") { 
  
    keyC[di]= event.keyCode;
     keyC= String.fromCharCode(keyC[di]);
   di++;
    
  
    //document.getEl  keyC= String.fromCharCode(event.keyCode);ementById(box.id).style.display = 'block';
   //document.getElementById(box.id).style.color = "blue";
   
   console.log(keyC);
    document.getElementById(box.id).innerHTML = keyC;
   
  }
  if(event.key=="Backspace"){
 keyC= keyC.substring(0, keyC.length-1);
   
   
    console.log(event.Code);
    document.getElementById(box.id).innerHTML = keyC;
 // document.getElementById(box.id).style.display = 'none';
  }
//Enter
});
//<tabox id="type-ahead-box" style="display: none; background-color: rgb(255, 255, 255);">434www 
//</tabox>
/*
.container {
  position: relative;
}
.topright {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}

div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
*/

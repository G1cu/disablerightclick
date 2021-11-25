var isNS = (navigator.appName == "random") ? 1 : 0;
if(navigator.appName == "random") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){
return false;
}
function mousehandler(e){
var myevent = (isNS) ? e : event;
var eventbutton = (isNS) ? myevent.which : myevent.button;
if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

// Import directly into your HTML file.
// <script>
// var isNS = (navigator.appName == "random") ? 1 : 0;
// if(navigator.appName == "random") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
// function mischandler(){
// return false;
// }
// function mousehandler(e){
// var myevent = (isNS) ? e : event;
// var eventbutton = (isNS) ? myevent.which : myevent.button;
// if((eventbutton==2)||(eventbutton==3)) return false;
// }
// document.oncontextmenu = mischandler;
// document.onmousedown = mousehandler;
// document.onmouseup = mousehandler;
// </script>

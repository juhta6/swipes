tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true
}).open();
//---------------------------------------------------------------------------------------------------------------------------

var duracell = 350;
var es = "ease-in-out";

var composite1 = new tabris.Composite({
  layoutData: {left: "-500%", top: 0, bottom: 0, right: "50%"},
  background: "#f3f3f3"
}).on("swipe:right", function(widget){
  widget.animate({transform: {translationX: (screen.width)}},{duration: duracell, easing: es})
  composite2.animate({transform: {translationX: (screen.width)}},{duration: duracell, easing: es}) 
}).on("swipe:left", function(widget){
  widget.animate({transform: {translationX: (-screen.width/500)}},{duration: duracell, easing: es})
  composite2.animate({transform: {translationX: (-screen.width/500)}},{duration: duracell, easing: es})
}).appendTo(page);

var page1 = new tabris.Composite({
  layoutData: {left: 0, top: 0, bottom: 0, right: "9.1%"},
  background: "transparent"
}).appendTo(composite1);

new tabris.TextView({
  alignment: "center",
  layoutData: {right: 50, centerY: 0},
  font: "bold 30px",
  text: "Left"
}).appendTo(composite1);

var composite2 = new tabris.Composite({
  layoutData: {left: "50%", top: 0, bottom: 0, right: "-500%"},
  background: "#eaeaea"
}).on("swipe:left", function(widget){
    widget.animate({transform: {translationX: (-screen.width)}},{duration: duracell, easing: es})  
    composite1.animate({transform: {translationX: (-screen.width)}},{duration: duracell, easing: es})  
}).on("swipe:right", function(widget){
    widget.animate({transform: {translationX: (screen.width/500)}},{duration: duracell, easing: es})  
    composite1.animate({transform: {translationX: (screen.width/500)}},{duration: duracell, easing: es}) 
}).appendTo(page);

var page2 = new tabris.Composite({
  layoutData: {left: "9.1%", top: 0, bottom: 0, right: 0},
  background: "transparent"
}).appendTo(composite2);

new tabris.TextView({
  alignment: "center",
  layoutData: {left: 50, centerY: 0},
  font: "bold 30px",
  text: "Right"
}).appendTo(composite2);

//---------------------------------------------------------------------------------------------------------------------------

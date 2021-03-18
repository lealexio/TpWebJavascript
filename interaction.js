
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.


function DnD(boundingObject, interactor) {
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.pression = false;
  this.wait = true;

  this.boundingObject = boundingObject;
  this.interactor = interactor;


  this.getInitX = function() {
    return   this.initX;
  }.bind(this) ;

  this.getInitY = function() {
    return   this.initY;

  }.bind(this) ;
  this.getFinalX = function() {
    return   this.finalX;

  }.bind(this) ;
  this.getFinalY = function() {
    return   this.finalY;

  }.bind(this) ;


  this.onMouseDown = function(event) {
    this.pression = true;
    this.initX = getMousePosition(this.boundingObject,event).x;
    this.initY = getMousePosition(this.boundingObject,event).y;
    this.interactor.onInteractionStart(this);

  }.bind(this) ;

  this.onMoveEvent = function(event) {
    if (this.pression){
      this.finalX = getMousePosition(this.boundingObject,event).x;
      this.finalY = getMousePosition(this.boundingObject,event).y;
      this.interactor.onInteractionUpdate(this);
    }

  }.bind(this) ;


  this.onMouseUp = function(event) {
    this.pression = false;
    this.finalX = getMousePosition(this.boundingObject,event).x;
    this.finalY = getMousePosition(this.boundingObject,event).y;
    this.interactor.onInteractionEnd(this);
  }.bind(this) ;


  boundingObject.addEventListener('mousedown', this.onMouseDown, false);
  boundingObject.addEventListener('mousemove', this.onMoveEvent, false);
  boundingObject.addEventListener('mouseup', this.onMouseUp, false);

};



function getMousePosition(can,evt) {
  var rect = can.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

//Event listener for element remove
function removeElement(id){
  pencil.removeElement(id);
};
//Event listener for element remove
function clearGraph(){
  pencil.clearElements();
};

//Event listener for element remove
function undo(){
  pencil.undoElements();
};

function updateinitX(id) {
  pencil.updateinitX(id);
};
function updateinitY(id) {
  pencil.updateinitY(id);
};
function updatefinalX(id) {
  pencil.updatefinalX(id);
};
function updatefinalY(id) {
  pencil.updatefinalY(id);
};
function updateSize(id) {
  pencil.updateSize(id);
};
function updateColour(id) {
  pencil.updateColour(id);
};
function randomColor(id) {
  pencil.randomColor(id);
};



function Drawing(){
  this.forms = new Array();

  //Forms
  this.getForms = function() {
    return this.forms;
  }.bind(this) ;

  this.getForm = function(id) {
    return this.forms[id];
  }.bind(this) ;

  this.addForms = function(form) {
    this.forms.push(form);
  }.bind(this) ;

  this.clearForms = function() {
    this.forms = new Array();
  }.bind(this) ;

  this.removeForm = function(id) {
    console.log("remove element "+id);
    console.log("Before : "+this.forms);

    this.forms.remove(id,id);

    console.log("After : "+this.forms);
  }.bind(this) ;

  this.removeLastForm = function() {
    this.forms.pop();
  }.bind(this) ;

}


function MyForm(initX,initY,finalX,finalY,epaisseur,couleur,typeName) {

  this.typeName = typeName;
  this.initX = initX;
  this.initY = initY;
  this.finalX = finalX;
  this.finalY = finalY;
  this.epaisseur = epaisseur;
  this.couleur = couleur;

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

  this.getEpaisseur = function() {
    return   this.epaisseur;

  }.bind(this) ;

  this.getCouleur = function() {
    return   this.couleur;
  }.bind(this) ;

}

function Line(initX,initY,finalX,finalY,epaisseur,couleur){
  MyForm.call(this, initX,initY,finalX,finalY,epaisseur,couleur,"Line");
};
Line.prototype = new MyForm();

function Rectangle(initX,initY,finalX,finalY,epaisseur,couleur){
    MyForm.call(this, initX,initY,finalX,finalY,epaisseur,couleur,"Rectangle");
};
Rectangle.prototype = new MyForm();

function Circle(initX,initY,finalX,finalY,epaisseur,couleur){
  MyForm.call(this, initX,initY,finalX,finalY,epaisseur,couleur,"Circle");
};
Circle.prototype = new MyForm();

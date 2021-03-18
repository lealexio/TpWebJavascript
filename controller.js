
//var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currentShape = 0;
	this.ctx = ctx;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);


	this.onInteractionStart = function(dnd) {
		if (document.getElementById("butRect").checked){
			this.currentShape  = new Rectangle(dnd.initX,dnd.initY,dnd.finalX,dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);

		}
		else if (document.getElementById("butCircle").checked){
			this.currentShape  = new Circle(dnd.initX,dnd.initY,dnd.finalX,dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);

		}
		else{
			this.currentShape  = new Line(dnd.initX,dnd.initY,dnd.finalX,dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
		}


	}.bind(this) ;

	this.onInteractionUpdate = function(dnd) {
		if (this.currentShape != 0){
			this.currentShape.clear(this.ctx)
			this.currentShape.finalX = dnd.finalX;
			this.currentShape.finalY = dnd.finalY;
			drawing.paint(this.ctx);
			this.currentShape.paint(this.ctx);
		}
	}.bind(this) ;

	this.onInteractionEnd = function(dnd) {
		this.currentShape.finalX = dnd.finalX;
		this.currentShape.finalY = dnd.finalY;
		//If user clic but draw nothing
		if(this.currentShape.finalX==this.currentShape.initX && this.currentShape.finalY==this.currentShape.initY){
			this.currentShape=null;
		}
		else{
			this.currentShape.paint(this.ctx);
			drawing.addForms(this.currentShape);
			drawing.paint(this.ctx);
			updateShapeList(drawing.getForms())
		}


	}.bind(this) ;


	this.removeElement = function (id){
		drawing.removeForm(id);
		updateDraw();
	}

	this.clearElements = function () {
		drawing.clearForms();
		updateDraw();
	}

	this.undoElements = function () {
		drawing.removeLastForm();
		updateDraw();
	}

	this.updateinitX = function (id){
		drawing.getForm(id).initX=document.getElementById("initXID"+id).value;
		updateDraw();
	}

	this.updateinitY = function (id){
		drawing.getForm(id).initY=document.getElementById("initYID"+id).value;
		updateDraw();
	}

	this.updatefinalX = function (id){
		drawing.getForm(id).finalX=document.getElementById("finalXID"+id).value;
		updateDraw();
	}

	this.updatefinalY = function (id){
		drawing.getForm(id).finalY=document.getElementById("finalYID"+id).value;
		updateDraw();
	}

	this.updateSize = function (id){
		drawing.getForm(id).epaisseur=document.getElementById("sizeID"+id).value;
		updateDraw();
	}

	this.updateColour = function (id){
		drawing.getForm(id).couleur=document.getElementById("colourPickerID"+id).value;
		updateDraw();
	}

	this.randomColor = function (id){
		console.log("update color of "+id);
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		drawing.getForm(id).couleur=''+color;
		updateDraw();

	}
	function updateDraw() {
		drawing.paint(this.ctx);
		updateShapeList(drawing.getForms());
	}
};




// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

MyForm.prototype.clear = function(ctx) {
    canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};


Rectangle.prototype.paint = function(ctx) {
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle=this.getCouleur();
    ctx.beginPath();
    ctx.rect(this.getInitX(),this.getInitY(),this.getFinalX()-this.getInitX(),this.getFinalY()-this.getInitY());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle=this.getCouleur();
    ctx.beginPath();
    ctx.moveTo(this.getInitX(),this.getInitY());
    ctx.lineTo(this.getFinalX(),this.getFinalY());
    ctx.stroke();
};

Circle.prototype.paint = function(ctx) {
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle=this.getCouleur();

    ctx.beginPath();
    ctx.arc(this.getInitX(), this.getInitY(), Math.sqrt(Math.pow((this.getFinalX()-this.getInitX()),2)+Math.pow((this.getFinalY()-this.getInitY()),2)), 0, 2 * Math.PI);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#f0f0f0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx); });
};

function updateShapeList(items){
    $('#shapeList').empty();
    items.forEach(function(item){

    $('#shapeList').append(
        '            <li class="list-group-item">\n' +
        '                <h4 class = "list-group-item-heading">'+item.typeName+'</h4>\n' +
        '                    <div class="form-row">\n' +
        '                        <div class="col">\n' +
        '                            <div class="input-group">\n' +
        '                                <div class="input-group-prepend">\n' +
        '                                    <div class="input-group-text">X1 :</div>\n' +
        '                                </div>\n' +
        '                                <input type="number" class="form-control col-form-label" id="initXID'+items.indexOf(item)+'" value="'+item.initX+'" onchange="updateinitX('+items.indexOf(item)+')">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="col">\n' +
        '                            <div class="input-group">\n' +
        '                                <div class="input-group-prepend">\n' +
        '                                    <div class="input-group-text">Y1 :</div>\n' +
        '                                </div>\n' +
        '                                <input type="number" class="form-control col-form-label" id="initYID'+items.indexOf(item)+'" value="'+item.initY+'" onchange="updateinitY('+items.indexOf(item)+')">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <hr>\n' +
        '                    <div class="form-row">\n' +
        '                        <div class="col">\n' +
        '                            <div class="input-group">\n' +
        '                                <div class="input-group-prepend">\n' +
        '                                    <div class="input-group-text">X2 :</div>\n' +
        '                                </div>\n' +
        '                                <input type="number" class="form-control col-form-label" id="finalXID'+items.indexOf(item)+'" value="'+item.finalX+'" onchange="updatefinalX('+items.indexOf(item)+')">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="col">\n' +
        '                            <div class="input-group">\n' +
        '                                <div class="input-group-prepend">\n' +
        '                                    <div class="input-group-text">Y2 :</div>\n' +
        '                                </div>\n' +
        '                                <input type="number" class="form-control col-form-label" id="finalYID'+items.indexOf(item)+'" value="'+item.finalY+'" onchange="updatefinalY('+items.indexOf(item)+')">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                <hr>\n' +
        '                <div class="form-row">\n' +
        '                    <div class="col">\n' +
        '                        <div class="input-group">\n' +
        '                            <div class="input-group-prepend">\n' +
        '                                <div class="input-group-text">Size :</div>\n' +
        '                            </div>\n' +
        '                            <input class="form-control colourPicker" id="sizeID'+items.indexOf(item)+'" type="number" min="1" max="50" step="1" value="'+item.epaisseur+'" onchange="updateSize('+items.indexOf(item)+')">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="col">\n' +
        '                        <div class="input-group">\n' +
        '                            <div class="input-group-prepend">\n' +
        '                                <div class="input-group-text">Colour :</div>\n' +
        '                            </div>\n' +
        '                            <input class="form-control form-control-color colourPicker" id="colourPickerID'+items.indexOf(item)+'" type="color" value="'+item.couleur+'" onchange="updateColour('+items.indexOf(item)+')">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <hr>\n' +
        '                <button type="button" class="btn btn-outline-danger" onclick="removeElement('+items.indexOf(item)+')">Remove</button>\n' +
        '                <button type="button" class="btn btn btn-outline-info" onclick="randomColor('+items.indexOf(item)+')">Random Color</button>\n' +
        '            </li>' );
    });
}

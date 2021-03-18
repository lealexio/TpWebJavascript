var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = document.getElementById('leftArea').scrollWidth;
canvas.height = document.body.scrollHeight-document.getElementById("navigationBar").scrollHeight-7;


// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

//Define new Remove method for Arrays
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

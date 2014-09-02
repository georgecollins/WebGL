function sketchtype() {
  var MAX_POINTS=44;
  var numpoints;
  var rcolor =[];
  var gcolor = [];
  this.bcolor = [];
  this.xmat = [];
  this.ymat = [];
  this.worldx = [];
  this.worldy = [];

  this.maxx = -10000;
  this.maxy = -10000;
  this.minx = 10000;
  this.miny = 10000;

  var pointsPositionBuffer;
  this.AddPoint = function(pt, x, y) {
    xmat[pt] =x;
    ymat[pt] =y;
  }


  this.drawit = function(gl) {
    pointsPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pointsPositionBuffer);
    var vertices = [
         0.0,  0.0,
         1.0,  0.0,
         0.0,  0.0,
         0.0,  1.0,
         2.0,  2.0,
         1.0,  1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    pointsPositionBuffer.itemSize = 2;  // # of dimensions
    pointsPositionBuffer.numItems = 6;  // #of items
    gl.bindBuffer(gl.ARRAY_BUFFER, pointsPositionBuffer);  // this seems safe to skip

  }
}

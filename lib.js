
//_global.vec2 = {};

var dilly = 1;

function ret_a_one() {
  return 1;
}


function vecxy(inx, iny) {
  var x;
  var y;
  this.x = inx;
  this.y = iny;
  console.log(this.x);
  console.log(x);
  this.length = function() {
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }
}
/*
"use strict";
(function() {
  _global.vecxy = {};
})();
*/

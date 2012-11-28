window.onload = function() {

  // parameters
  var _dimensions = 3;
  var a = 3;
  
  var r = new X.renderer3D();
  r.init();
  
  var o = new X.object();
  o.points = new X.triplets(6 * _dimensions);
  o.normals = new X.triplets(6 * _dimensions);
  o.type = 'LINES';
  o.linewidth = 10;
  o.pointsize = 3;
  
  // possible points
  var p = [[-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, 1]];
  
  var h = _dimensions / 2;
  for ( var i = -h; i < h; ++i) {
    // for ( var j = -h; j < h; ++j) {
    // for ( var k = -h; k < h; ++k) {
    
    var _p = p[Math.floor(Math.random() * p.length)];
    o.points.add(i * a + (_p[0] * a), 1 * (_p[0] * a), 1 * (_p[0] * a))
    o.points.add(-i * a + (_p[0] * a), -1 * (_p[0] * a), -1 * (_p[0] * a))
    // o.points.add(i * a + _p[0] * a, j * a - _p[1] * a, k * a + _p[2] * a);
    // o.points.add(i * a - _p[0] * a, j * a - _p[1] * a, k * a - _p[2] * a);
    // console.log(i * a, j * a, k * a);
    // o.points.add(i * a + p[_r][0], j * a + p[_r][1], k * a + p[_r][2]);
    // o.points.add(i * a + -p[_r][0], j * a + -p[_r][1], k * a +
    // -p[_r][2]);
    // o.points.add(i * a + -p[_r][0], j * a + -p[_r][1], k * a +
    // -p[_r][2]);
    o.normals.add(1, 1, 1);
    o.normals.add(1, 1, 1);
    // o.normals.add(1, 1, 1);
    // }
    // }
  }
  
  r.add(o);
  r.render();
  
};

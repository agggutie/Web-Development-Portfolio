function sketch_canvasForHTML(p) {
    p.setup = function () {
      p.createCanvas(400,400);
    }
  
    p.draw = function () {
      // stuff to draw
    }
  }
  new p5(sketch_idnameofdiv, 'idnameofdiv')
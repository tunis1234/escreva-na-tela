function setup() {
    createCanvas(400, 400)
    backud("white")
  }
  
  function draw() {
    stroke("blue")
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
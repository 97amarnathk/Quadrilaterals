//Project Variables
var myExperimentTitle = "Classification of Quadrilaterals";
var myName = "Amarnath Karthi";
var myHelpContent = "<h2>Classification of Quadrilaterals : Help</h2> <h3>About</h3> <p> This experiment demonstrates different types of quadrilaterals. </p> <h3>Controls</h3> <p> Under the shapes category you can select on out of 6 shapes at a time - </p> <ol> <li> Square </li> <li> Rectangle </li> <li> Parallelogram </li> <li> Rohumbus </li> <li> Kite </li> <li> Trapezium </li> </ol> <p> Under the Display Options sections, select show diagonals to display diagonals in the shape.</p> <h3>Resize functionality</h3> <p> Select 'Enable resize' to resize the shape. This option increases the size of the vertices of the quadrilaterals so that you can easily drag them and resize the shape. </p> <h3>Happy Experimenting!</h3>";

var myInfoContent = " <h2>Classification of Quadrilaterals : Info</h2> <p> A quadrilateral is a 4 sided polygon. It has the following properties : </p> <ul> <li> Sum of interior angles = 360 degrees </li> <li> Sum of exterior angles = 1080 degrees </li> <li> Number of diagonals = 2 </li> <li> Sum of any 3 sides > length of the remaining side </li> </ul> <p> Classification of quadrilaterals on the basisi of sides and angles : </p> <ol> <li> Rectangle </li> <li> Square </li> <li> Parallelogram </li> <li> Rohumbus </li> <li> Kite </li> <li> Trapezium </li> <li> General Quadrilateral </li> </ol> <p> Now let us study each quadrilateral in detail. </p> <ol> <li> <h3>Rectangle</h3> <p> A rectangle is a quadrilateral having all angles equal to 90 degree. Properties of rectangles : </p> <ul> <li> All angles are equal to 90 degrees. </li> <li> Opposite sides are equal and parallel to each other. </li> <li> Diagonals are equal. </li> <li> Area = length x breadth </li> <li> Diagonal divides the rectangle into 2 congruent triangles. </li> </ul> </li> <li> <h3>Square</h3> <p> A square is a quadrilateral having all angles equal to 90 degree and also all sides being equal. Properties of squares : </p> <ul> <li> A square is a rectangle, therefore has all its properties. </li> <li> All sides are equal. </li> <li> Area = s x s </li> </ul> </li> <li> <h3>Parallelogram</h3> <p> A parallelogram is a quadrilateral having opposite sides parallel to each other. Properties of parallelograms </p> <ul> <li> Sum of Adjacent angles = 180 degrees </li> <li> Alternate angles are equal. </li> <li> Opposite sides are equal and parallel to each other. </li> <li> Diagonals are equal and each divides the parallelogram into 2 congruent triangles. </li> <li> Area = base x height </li> </ul> </li> <li> <h3>Rohumbus</h3> <p> A rohumbus is a parallelogram having all sides equal. Properties of a rohumbus : </p> <ul> <li> All sides are equal. </li> <li> Diagonals are unequal and perpendicular to each other. </li> <li> Area = 1/2 x diagonal1 x diagonal2 </li> </ul> </li> <li> <h3>Kite</h3> <p> A kite is a quadrilateral whose 4 sides can be grouped together to have 2 pairs of equal adjacent sides. Properties of a kite : </p> <ul> <li> A kite has diagonals perpendicular to each other, and not necessarily equal. </li> </ul> </li> <li> <h3>Trapezium</h3> <p> A trapezium is a quadrilateral having atleast one pair of opposite sides parallel to each other. </p> </li> </ol> <h3>Note :</h3> <ul> <li> Every square is a rectangle, parallelogram, rohumbus, kite and a trapezium. </li> <li> Every rectangle is a parallelogram and a trapezium. </li> <li> Every parallelogram is a trapezium. </li> <li> Every rohumbus is a kite and a trapezium. </li> </ul>";

//Scene variables
var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var myCenterX;
var myCenterY;
var mySceneW;
var mySceneH;

//ShapeConstants
var SQUARE = 0;
var RECTANGLE = 1;
var PARALLELOGRAM = 2;
var ROHUMBUS = 3;
var KITE = 4;
var TRAPEZIUM = 5;

//Square Default Vertice Constants
var square_xA;
var square_yA;
var square_xB;
var square_yB;
var square_xC;
var square_yC;
var square_xD;
var square_yD;
//Rectangle Default Vertice Constants
var rectangle_xA;
var rectangle_yA;
var rectangle_xB;
var rectangle_yB;
var rectangle_xC;
var rectangle_yC;
var rectangle_xD;
var rectangle_yD;
//Parallelogram Default Vertice Constants
var parallelogram_xA;
var parallelogram_yA;
var parallelogram_xB;
var parallelogram_yB;
var parallelogram_xC;
var parallelogram_yC;
var parallelogram_xD;
var parallelogram_yD;
//Rohumbus Default Vertice Constants
var rohumbus_xA;
var rohumbus_yA;
var rohumbus_xB;
var rohumbus_yB;
var rohumbus_xC;
var rohumbus_yC;
var rohumbus_xD;
var rohumbus_yD;
//Kite Default Vertice Constants
var kite_xA;
var kite_yA;
var kite_xB;
var kite_yB;
var kite_xC;
var kite_yC;
var kite_xD;
var kite_yD;
//Trapezium Default Vertice Constants
var trapezium_xA;
var trapezium_yA;
var trapezium_xB;
var trapezium_yB;
var trapezium_xC;
var trapezium_yC;
var trapezium_xD;
var trapezium_yD;

//Colors
var backGroundColor = 0xddffdd;
var quadColor = 0x000000;

//text Variables
var textA;
var textB;
var textC;
var textD;

//Quadrilateral variables
var currentShape = SQUARE;
var quadA;
var quadB;
var quadC;
var quadD;
var sideAB;
var sideBC;
var sideCD;
var sideDA;
var diagAC;
var diagBD;
var quadZ=-0.01;
var sideThickness=4;
var diagThickness=3;
var pointRadius=0.015;
var fontSize=2;
var dragging;

//Boundary variables
xMin=0.65;
xMax=3.35;
yMin=0.15;
yMax=2.85;

//GUI Control Labels
var squareLabel = "square";
var rectangleLabel = "rectangle";
var parallelogramLabel = "parallelogram";
var rohumbusLabel = "rohumbus";
var kiteLabel = "kite";
var trapeziumLabel = "trapezium";
var diagonalsLabel = "show diagonals";
var anglesLabel = "show angles";
var dragLabel = "Enable Resizing";

/*------------------------GUI Handlers----------------------------------------------------*/
function emptyHandler() {

}

function squareHandler(newVal) {
  setCurrentShape(SQUARE);
}

function rectangleHandler(newVal) {
  setCurrentShape(RECTANGLE);
}

function parallelogramHandler(newVal) {
  setCurrentShape(PARALLELOGRAM);
}

function rohumbusHandler(newVal) {
  setCurrentShape(ROHUMBUS);
}

function kiteHandler(newVal) {
  setCurrentShape(KITE);
}

function trapeziumHandler(newVal) {
  setCurrentShape(TRAPEZIUM);
}

function anglesHandler(newVal) {

}

function diagonalsHandler(newVal) {
  if(newVal==true) {
    diagAC.material.color = new THREE.Color(quadColor);
    diagBD.material.color = new THREE.Color(quadColor);
    diagAC.material.needsUpdate=true;
    diagBD.material.needsUpdate=true;
    PIErender();
  }
  else {
    diagAC.material.color = new THREE.Color(backGroundColor);
    diagBD.material.color = new THREE.Color(backGroundColor);
    diagAC.material.needsUpdate=true;
    diagBD.material.needsUpdate=true;
    PIErender();
  }
}

function dragHandler(newVal) {
  if(newVal==true)
    pointRadius=0.08;
  else
    pointRadius=0.015;
  quadA.geometry = new THREE.CircleGeometry(pointRadius,32);
  quadB.geometry = new THREE.CircleGeometry(pointRadius,32);
  quadC.geometry = new THREE.CircleGeometry(pointRadius,32);
  quadD.geometry = new THREE.CircleGeometry(pointRadius,32);
  quadA.geometry.verticesNeedUpdate=true;
  quadB.geometry.verticesNeedUpdate=true;
  quadC.geometry.verticesNeedUpdate=true;
  quadD.geometry.verticesNeedUpdate=true;
  PIErender();
}

/*-----------------------End of GUI Handlers---------------------------------------------*/
/*-----------------------Helper Functions------------------------------------------------*/
function toDegrees (angle) {
  return angle * (180 / Math.PI);
}
function find_angle(A,B,C) {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2));
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    return Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
}

function calculateAngles() {
  var angleA = Math.round(toDegrees(find_angle(quadD.position,quadA.position,quadB.position)));
  var angleB = Math.round(toDegrees(find_angle(quadA.position,quadB.position,quadC.position)));
  var angleC = Math.round(toDegrees(find_angle(quadB.position,quadC.position,quadD.position)));
  var angleD = Math.round(toDegrees(find_angle(quadC.position,quadD.position,quadA.position)));

  PIEchangeInputText("∠A",angleA+"°");
  PIEchangeInputText("∠B",angleB+"°");
  PIEchangeInputText("∠C",angleC+"°");
  PIEchangeInputText("∠D",angleD+"°");
}

function setCurrentShape(shape) {
  currentShape=shape;
  printShape();

  if(shape==SQUARE) {
    PIEchangeInputCheckbox(squareLabel,true);
    reshapeQuadrilateral(square_xA,square_yA,square_xB,square_yB,square_xC,square_yC,square_xD,square_yD);
  }
  else
    PIEchangeInputCheckbox(squareLabel,false);

  if(shape==RECTANGLE) {
    PIEchangeInputCheckbox(rectangleLabel,true);
    reshapeQuadrilateral(rectangle_xA,rectangle_yA,rectangle_xB,rectangle_yB,rectangle_xC,rectangle_yC,rectangle_xD,rectangle_yD);
  }
  else
    PIEchangeInputCheckbox(rectangleLabel,false);

  if(shape==PARALLELOGRAM) {
    PIEchangeInputCheckbox(parallelogramLabel,true);
    reshapeQuadrilateral(parallelogram_xA,parallelogram_yA,parallelogram_xB,parallelogram_yB,parallelogram_xC,parallelogram_yC,parallelogram_xD,parallelogram_yD);
  }
  else
    PIEchangeInputCheckbox(parallelogramLabel,false);

  if(shape==ROHUMBUS) {
    PIEchangeInputCheckbox(rohumbusLabel,true);
    reshapeQuadrilateral(rohumbus_xA,rohumbus_yA,rohumbus_xB,rohumbus_yB,rohumbus_xC,rohumbus_yC,rohumbus_xD,rohumbus_yD);
  }
  else
    PIEchangeInputCheckbox(rohumbusLabel,false);

  if(shape==KITE) {
    PIEchangeInputCheckbox(kiteLabel,true);
    reshapeQuadrilateral(kite_xA,kite_yA,kite_xB,kite_yB,kite_xC,kite_yC,kite_xD,kite_yD);
  }
  else
    PIEchangeInputCheckbox(kiteLabel,false);

  if(shape==TRAPEZIUM) {
    PIEchangeInputCheckbox(trapeziumLabel,true);
    reshapeQuadrilateral(trapezium_xA,trapezium_yA,trapezium_xB,trapezium_yB,trapezium_xC,trapezium_yC,trapezium_xD,trapezium_yD);
  }
  else
    PIEchangeInputCheckbox(trapeziumLabel,false);
  PIErender();
}

function insideBoundaries(x1,y1) {
  if(x1>=xMin&&x1<=xMax&&y1>=yMin&&y1<=yMax)
    return(true);
  else
    return(false);
}

/*-----------------------Initializers----------------------------------------------------*/
function initializeScene() {
  mySceneTLX = 0.0;
  mySceneTLY = 3.0;
  mySceneBRX = 5.2;
  mySceneBRY = 0.0;
  myCenterX = (mySceneTLX+mySceneBRX)/2;
  myCenterY = (mySceneTLY+mySceneBRY)/2;
  mySceneW   = (mySceneBRX - mySceneTLX);
  mySceneH   = (mySceneTLY - mySceneBRY);
}

function initializeVerticeDefaults() {
  /*
  quadA=plotPoint(myCenterX-1,myCenterY+1);
  quadB=plotPoint(myCenterX+1,myCenterY+1);
  quadC=plotPoint(myCenterX+1,myCenterY-1);
  quadD=plotPoint(myCenterX-1,myCenterY-1);
  */
  //Square
  square_xA = myCenterX-0.5;
  square_yA = myCenterY+0.5;
  square_xB = myCenterX+0.5;
  square_yB = myCenterY+0.5;
  square_xC = myCenterX+0.5;
  square_yC = myCenterY-0.5;
  square_xD = myCenterX-0.5;
  square_yD = myCenterY-0.5;
  //Rectangle
  rectangle_xA = myCenterX-0.75;
  rectangle_yA = myCenterY+0.5;
  rectangle_xB = myCenterX+0.75;
  rectangle_yB = myCenterY+0.5;
  rectangle_xC = myCenterX+0.75;
  rectangle_yC = myCenterY-0.5;
  rectangle_xD = myCenterX-0.75;
  rectangle_yD = myCenterY-0.5;
  //Parallelogram
  parallelogram_xA = rectangle_xA+0.25;
  parallelogram_yA = rectangle_yA;
  parallelogram_xB = rectangle_xB+0.25;
  parallelogram_yB = rectangle_yB;
  parallelogram_xC = rectangle_xC-0.25;
  parallelogram_yC = rectangle_yC;
  parallelogram_xD = rectangle_xD-0.25;
  parallelogram_yD = rectangle_yD;
  //Rohumbus
  rohumbus_xA = myCenterX;
  rohumbus_yA = myCenterY+0.5;
  rohumbus_xB = myCenterX+0.75;
  rohumbus_yB = myCenterY;
  rohumbus_xC = myCenterX;
  rohumbus_yC = myCenterY-0.5;
  rohumbus_xD = myCenterX-0.75;
  rohumbus_yD = myCenterY;
  //Kite
  kite_xA = myCenterX;
  kite_yA = myCenterY+0.75;
  kite_xB = myCenterX+0.5;
  kite_yB = myCenterY+0.25;
  kite_xC = myCenterX;
  kite_yC = myCenterY-0.75;
  kite_xD = myCenterX-0.5;
  kite_yD = myCenterY+0.25;
  //Trapezium
  trapezium_xA = square_xA+0.2;
  trapezium_yA = square_yA;
  trapezium_xB = square_xB-0.2;
  trapezium_yB = square_yB;
  trapezium_xC = square_xC+0.2;
  trapezium_yC = square_yC;
  trapezium_xD = square_xD-0.2;
  trapezium_yD = square_yD;
}

function initializeGUIControls() {
  PIEaddInputCommand("Shape",emptyHandler);
  PIEaddInputCheckbox(squareLabel,true,squareHandler);
  PIEaddInputCheckbox(rectangleLabel,false,rectangleHandler);
  PIEaddInputCheckbox(parallelogramLabel,false,parallelogramHandler);
  PIEaddInputCheckbox(rohumbusLabel,false,rohumbusHandler);
  PIEaddInputCheckbox(kiteLabel,false,kiteHandler);
  PIEaddInputCheckbox(trapeziumLabel,false,trapeziumHandler);
  PIEaddInputCommand("Display Options",emptyHandler);
  PIEaddInputCheckbox(diagonalsLabel,false,diagonalsHandler);
  PIEaddInputCheckbox(dragLabel,false,dragHandler);
  PIEaddInputCommand("Angles",emptyHandler);
  PIEaddInputText("∠A","90°",emptyHandler);
  PIEaddInputText("∠B","90°",emptyHandler);
  PIEaddInputText("∠C","90°",emptyHandler);
  PIEaddInputText("∠D","90°",emptyHandler);
}
/*-----------------------End of Initializers---------------------------------------------*/

/*-----------------------Drag Functions-------------------------------------------------------------*/
function dragA(element,newPos) {
  console.log("A drag "+printShape());
  if(insideBoundaries(newPos.x,newPos.y)==false)
    return;
  //Compute new coordinates for all other points
  var xA=quadA.position.x;
  var yA=quadA.position.y;
  var xB=quadB.position.x;
  var yB=quadB.position.y;
  var xC=quadC.position.x;
  var yC=quadC.position.y;
  var xD=quadD.position.x;
  var yD=quadD.position.y;

  xA=newPos.x;
  yA=newPos.y;

  if(currentShape==SQUARE) {
    xA = quadA.position.x-(yA-quadA.position.y);
    yB=yA;
    xD=xA;
  }
  else if(currentShape==RECTANGLE) {
    yB=yA;
    xD=xA;
  }
  else if(currentShape==PARALLELOGRAM) {
    xB=xC-xD+xA;
    yB=yA;
  }
  else if(currentShape==ROHUMBUS) {
    xA=myCenterX;
    yC=2*myCenterY-yA;
  }
  else if(currentShape==KITE) {
    xA=quadA.position.x;
  }
  else if(currentShape==TRAPEZIUM) {
    yB=yA;
  }

  /*console.log("A "+insideBoundaries(xA,yA));
  console.log("B "+insideBoundaries(xB,yB));
  console.log("C "+insideBoundaries(xC,yC));
  console.log("D "+insideBoundaries(xD,yD)+" "+xD+" "+yD);*/
  //Check if all boundaries satisfy the boundary conditions
  if(insideBoundaries(xA,yA) && insideBoundaries(xB,yB) && insideBoundaries(xC,yC) && insideBoundaries(xD,yD)) {
  //  console.log("Valid relocation");
    //Set Sides
    reshapeQuadrilateral(xA,yA,xB,yB,xC,yC,xD,yD)
  }
}

function dragB(element,newPos) {
  if(insideBoundaries(newPos.x,newPos.y)==false)
    return;
    //Compute new coordinates for all other points
    var xA=quadA.position.x;
    var yA=quadA.position.y;
    var xB=quadB.position.x;
    var yB=quadB.position.y;
    var xC=quadC.position.x;
    var yC=quadC.position.y;
    var xD=quadD.position.x;
    var yD=quadD.position.y;

    xB=newPos.x;
    yB=newPos.y;

    if(currentShape==SQUARE) {
      xB = quadB.position.x+(yB-quadB.position.y);
      yA=yB;
      xC=xB;
    }
    else if(currentShape==RECTANGLE) {
      yA=yB;
      xC=xB;
    }
    else if(currentShape==PARALLELOGRAM) {
      xA=xB+xD-xC;
      yA=yB;
    }
    else if(currentShape==ROHUMBUS) {
      yB=myCenterY;
      xD=2*myCenterX-xB;
    }
    else if(currentShape==KITE) {
      yD=yB;
      xD=2*myCenterX-xB
    }
    else if(currentShape==TRAPEZIUM) {
      yA=yB;
    }

    console.log("A "+insideBoundaries(xA,yA));
    console.log("B "+insideBoundaries(xB,yB));
    console.log("C "+insideBoundaries(xC,yC));
    console.log("D "+insideBoundaries(xD,yD)+" "+xD+" "+yD);
    //Check if all boundaries satisfy the boundary conditions
    if(insideBoundaries(xA,yA) && insideBoundaries(xB,yB) && insideBoundaries(xC,yC) && insideBoundaries(xD,yD)) {
      console.log("Valid relocation");
      //Set Sides
      reshapeQuadrilateral(xA,yA,xB,yB,xC,yC,xD,yD)
    }
}

function dragC(element,newPos) {
  if(insideBoundaries(newPos.x,newPos.y)==false)
    return;
    //Compute new coordinates for all other points
    var xA=quadA.position.x;
    var yA=quadA.position.y;
    var xB=quadB.position.x;
    var yB=quadB.position.y;
    var xC=quadC.position.x;
    var yC=quadC.position.y;
    var xD=quadD.position.x;
    var yD=quadD.position.y;

    xC=newPos.x;
    yC=newPos.y;

    if(currentShape==SQUARE) {
      xC = quadC.position.x-(yC-quadC.position.y);
      yD=yC;
      xB=xC;
    }
    else if(currentShape==RECTANGLE) {
      yD=yC;
      xB=xC;
    }
    else if(currentShape==PARALLELOGRAM) {
      xD=-1*(xB-xA-xC);
      yD=yC;
    }
    else if(currentShape==ROHUMBUS) {
      xC=myCenterX;
      yA=2*myCenterY-yC;
    }
    else if(currentShape==KITE) {
      xC=quadC.position.x;
    }
    else if(currentShape==TRAPEZIUM) {
      yD=yC;
    }

    console.log("A "+insideBoundaries(xA,yA));
    console.log("B "+insideBoundaries(xB,yB));
    console.log("C "+insideBoundaries(xC,yC));
    console.log("D "+insideBoundaries(xD,yD)+" "+xD+" "+yD);
    //Check if all boundaries satisfy the boundary conditions
    if(insideBoundaries(xA,yA) && insideBoundaries(xB,yB) && insideBoundaries(xC,yC) && insideBoundaries(xD,yD)) {
      console.log("Valid relocation");
      //Set Sides
      reshapeQuadrilateral(xA,yA,xB,yB,xC,yC,xD,yD)
    }
}

function dragD(element,newPos) {
  if(insideBoundaries(newPos.x,newPos.y)==false)
    return;
    //Compute new coordinates for all other points
    var xA=quadA.position.x;
    var yA=quadA.position.y;
    var xB=quadB.position.x;
    var yB=quadB.position.y;
    var xC=quadC.position.x;
    var yC=quadC.position.y;
    var xD=quadD.position.x;
    var yD=quadD.position.y;

    xD=newPos.x;
    yD=newPos.y;

    if(currentShape==SQUARE) {
      xD = quadD.position.x+(yD-quadD.position.y);
      yC=yD;
      xA=xD;
    }
    else if(currentShape==RECTANGLE) {
      yC=yD;
      xA=xD;
    }
    else if(currentShape==PARALLELOGRAM) {
      xC=xB-xA+xD;
      yC=yD;
    }
    else if(currentShape==ROHUMBUS) {
      yD=myCenterY;
      xB=2*myCenterX-xD;
    }
    else if(currentShape==KITE) {
      yB=yD;
      xB=2*myCenterX-xD;
    }
    else if(currentShape==TRAPEZIUM) {
      yC=yD;
    }

    console.log("A "+insideBoundaries(xA,yA));
    console.log("B "+insideBoundaries(xB,yB));
    console.log("C "+insideBoundaries(xC,yC));
    console.log("D "+insideBoundaries(xD,yD)+" "+xD+" "+yD);
    //Check if all boundaries satisfy the boundary conditions
    if(insideBoundaries(xA,yA) && insideBoundaries(xB,yB) && insideBoundaries(xC,yC) && insideBoundaries(xD,yD)) {
      console.log("Valid relocation");
      //Set Sides
      reshapeQuadrilateral(xA,yA,xB,yB,xC,yC,xD,yD)
    }
}
/*-----------------------------------------Graphics Functions----------------------------------------*/
//Changes the vertices of the quadrilateral
function reshapeQuadrilateral(xA,yA,xB,yB,xC,yC,xD,yD) {
  //Set Vertice Positions
  quadA.position.set(xA,yA,quadZ);
  quadB.position.set(xB,yB,quadZ);
  quadC.position.set(xC,yC,quadZ);
  quadD.position.set(xD,yD,quadZ);

  sideAB.geometry.vertices[0].x=xA;
  sideAB.geometry.vertices[0].y=yA;
  sideAB.geometry.vertices[1].x=xB;
  sideAB.geometry.vertices[1].y=yB;

  sideBC.geometry.vertices[0].x=xB;
  sideBC.geometry.vertices[0].y=yB;
  sideBC.geometry.vertices[1].x=xC;
  sideBC.geometry.vertices[1].y=yC;

  sideCD.geometry.vertices[0].x=xC;
  sideCD.geometry.vertices[0].y=yC;
  sideCD.geometry.vertices[1].x=xD;
  sideCD.geometry.vertices[1].y=yD;

  sideDA.geometry.vertices[0].x=xD;
  sideDA.geometry.vertices[0].y=yD;
  sideDA.geometry.vertices[1].x=xA;
  sideDA.geometry.vertices[1].y=yA;

  //Set Diagonals
  diagAC.geometry.vertices[0].x=xA;
  diagAC.geometry.vertices[0].y=yA;
  diagAC.geometry.vertices[1].x=xC;
  diagAC.geometry.vertices[1].y=yC;

  diagBD.geometry.vertices[0].x=xB;
  diagBD.geometry.vertices[0].y=yB;
  diagBD.geometry.vertices[1].x=xD;
  diagBD.geometry.vertices[1].y=yD;

  //set verticesNeedUpdate of all lines to be true
  sideAB.geometry.verticesNeedUpdate=true;
  sideBC.geometry.verticesNeedUpdate=true;
  sideCD.geometry.verticesNeedUpdate=true;
  sideDA.geometry.verticesNeedUpdate=true;
  diagAC.geometry.verticesNeedUpdate=true;
  diagBD.geometry.verticesNeedUpdate=true;
  alignText();
  calculateAngles();
}

function createBackground() {
  var myGeometry = new THREE.BoxGeometry(mySceneW,mySceneH,0.1);
  var myMaterial = new THREE.MeshBasicMaterial();
  var myBack = new THREE.Mesh(myGeometry,myMaterial);
  myBack.position.set(myCenterX,myCenterY,quadZ-0.1);
  myBack.material.color = new THREE.Color(backGroundColor);
  myBack.material.needsUpdate = true;
  PIEaddElement(myBack);
}


function initializeText(text) {
  //Create Texture
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
bitmap.width = 512;
bitmap.height = 512;
console.log("Canvas");
console.log(bitmap);
g.fillStyle = '#eeffee';
g.fillRect(0,0,bitmap.width,bitmap.height);
g.font = 'Bold 400px Arial';
g.fillStyle = '#000000';
g.fillText(text, 128,450);

// canvas contents will be used for a texture
var texture = new THREE.Texture(bitmap)
texture.needsUpdate = true;

  //Create Box
  var myGeometry = new THREE.BoxGeometry(0.1,0.1,0.0001);
  var myMaterial = new THREE.MeshBasicMaterial({map: texture});
  var textBox = new THREE.Mesh(myGeometry,myMaterial);
  textBox.position.set(myCenterX,myCenterY,quadZ);
  PIEaddElement(textBox);
  return(textBox);
}

function alignText() {
  var val=0.09
  textA.position.set(quadA.position.x-val,quadA.position.y+val,quadZ-0.01);
  textB.position.set(quadB.position.x+val,quadB.position.y+val,quadZ-0.01);
  textC.position.set(quadC.position.x+val,quadC.position.y-val,quadZ-0.01);
  textD.position.set(quadD.position.x-val,quadD.position.y-val,quadZ-0.01);
}

function createTextLabels() {
  textA = initializeText("A");
  textB = initializeText("B");
  textC = initializeText("C");
  textD = initializeText("D");
  alignText();
}


//Plots a point x y and returns its reference
function plotPoint(x,y) {
  var myGeometry=new THREE.CircleGeometry(pointRadius,32);
  var myMaterial= new THREE.MeshBasicMaterial();
  var myCircle = new THREE.Mesh(myGeometry,myMaterial);
  myCircle.position.set(x,y,quadZ);
  PIEaddElement(myCircle);
  myCircle.material.color = new THREE.Color(quadColor);
  myCircle.material.needsUpdate = true;
  return(myCircle);
}

//Plots a line between 2 plotted points p1 and p2 dashed=0 means filled 1 means dashed
function plotLine(A,B,thickness,dashed) {
  var myGeometry = new THREE.Geometry();
  var p1 = new THREE.Vector3(A.position.x,A.position.y,quadZ-0.01);
  var p2 = new THREE.Vector3(B.position.x,B.position.y,quadZ-0.01);
  myGeometry.vertices.push(p1);
  myGeometry.vertices.push(p2);
  var myMaterial;
  if(dashed==1)
    myMaterial= new THREE.LineDashedMaterial({dashSize: 0.02,gapSize: 0.02});
  else
    myMaterial = new THREE.LineBasicMaterial();
  myGeometry.computeLineDistances();
  var line = new THREE.Line(myGeometry,myMaterial);
  PIEaddElement(line);
  line.material.color = new THREE.Color(quadColor);
  line.material.linewidth = thickness;
  line.material.needsUpdate = true;
  return(line);
}
//Creates the initial quadrilateral
function plotQuadrilateral() {
  //Create Points
  quadA=plotPoint(square_xA,square_yA);
  quadB=plotPoint(square_xB,square_yB);
  quadC=plotPoint(square_xC,square_yC);
  quadD=plotPoint(square_xD,square_yD);
  //Create Sides
  sideAB=plotLine(quadA,quadB,sideThickness,0);
  sideBC=plotLine(quadB,quadC,sideThickness,0);
  sideCD=plotLine(quadC,quadD,sideThickness,0);
  sideDA=plotLine(quadD,quadA,sideThickness,0);
  //Create Diagonals
  diagAC=plotLine(quadA,quadC,diagThickness,1);
  diagBD=plotLine(quadB,quadD,diagThickness,1);
  diagAC.material.color = new THREE.Color(backGroundColor);
  diagBD.material.color = new THREE.Color(backGroundColor);
  diagAC.material.needsUpdate=true;
  diagBD.material.needsUpdate=true;
  calculateAngles();
}
/*---------------------------------------End of Graphics Functions-----------------------------------*/

/*----------------------------------------Essential PIE Functions-----------------------------------*/
function loadExperimentElements() {
  //Begin by assiging title, name, help and info content
  PIEsetExperimentTitle(myExperimentTitle);
  PIEsetDeveloperName(myName);
  PIEupdateHelp(myHelpContent);
  PIEupdateInfo(myInfoContent);
  //initialize data
  initializeScene();
  initializeGUIControls();
  initializeVerticeDefaults();
  //Create a white background
  console.log("Creating back");
  createBackground();
  console.log("Background Created");

  //Plot the Quadrilateral
  plotQuadrilateral();
    createTextLabels();
  PIEdragElement(quadA);
  PIEdragElement(quadB);
  PIEdragElement(quadC);
  PIEdragElement(quadD);
  PIEsetDrag(quadA,dragA);
  PIEsetDrag(quadB,dragB);
  PIEsetDrag(quadC,dragC);
  PIEsetDrag(quadD,dragD);
  //Create Labels
  resetExperiment();
  PIEsetAreaOfInterest(mySceneTLX,mySceneTLY,mySceneBRX,mySceneBRY);
  console.log("Height "+mySceneH);
  console.log("Width "+mySceneW);
  console.log("A "+quadA.position.x+" "+quadA.position.y);
  console.log("B "+quadB.position.x+" "+quadB.position.y);
  console.log("C "+quadC.position.x+" "+quadC.position.y);
  console.log("D "+quadD.position.x+" "+quadD.position.y);
}

function resetExperiment() {
  setCurrentShape(SQUARE);
  dragHandler(false);
  PIEchangeInputText(dragLabel,false);
}

function updateExperimentElements(t,dt) {

}

/*-------------------------------Debugging functions--------------------------------------------------*/
function printShape() {
  var string;
  if(currentShape==SQUARE)
    string="Square";
  else if(currentShape==RECTANGLE)
    string="Rectangle";
  else if(currentShape==PARALLELOGRAM)
    string= "Parallelogram";
  else if(currentShape==ROHUMBUS)
    string="Rohumbus";
  else if(currentShape==KITE)
    string="Kite";
  else
    string="Trapezium";
  return(string);
}

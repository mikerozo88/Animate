var draw = false;
var path;

function onMouseDown(event){
  path = new Path();
	path.strokeColor = 'black';
	path.add(event.point);
	
}

function onMouseUp(event){
	path.simplify();
}

function onMouseDrag(event){
	path.add(event.point);
	path.smooth();
}

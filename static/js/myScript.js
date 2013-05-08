var mousePoint = view.center;
var amount = 55;
var colors = ['lightgreen', 'white', 'lightblue', 'white'];
var children = project.activeLayer.children;
var segments = 4;
var futz = 0;

for (var i = 0; i < amount; i++) {
    var rect = new Rectangle([0, 0], [25, 25]);
    rect.center = mousePoint;
    var path = new Path.RoundRectangle(rect, 10);//i / 2);
    path.fillColor = colors[i % 4];
    var scale = Math.sin(Math.PI * (i / amount) * segments) * 5;
    path.scale(scale);
}

function onMouseMove(event) {
    mousePoint = event.point;
}

function onFrame(event) {
    for (var i = 0, l = children.length; i < l; i++) {
        var item = children[i];
        var delta = (mousePoint - item.position) / ((amount - i) + 5);
        // item.rotate(Math.sin((event.count + i) / 10));
        item.rotate(Math.sin( event.count % (65 + i) / (65 + i) * Math.PI ) );
        item.scale (Math.sin( event.count / 4 ) / 100 + 1.0001);

        if (delta.length > 0.1)
            item.translate(delta);
    }
}

function onMouseUp(event) { 
    futz = futz + 1;
}

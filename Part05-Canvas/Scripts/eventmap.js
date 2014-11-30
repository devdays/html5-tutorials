
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.moveTo(100, 150);
    context.lineTo(400, 150);
    context.lineWidth = 12;
    context.stroke();

    context.fillText("First Ave", 100, 135);
    context.moveTo(200, 35);
    context.lineTo(299, 175);
    context.lineWidth = 12;
    context.stroke();

    // save off the state of the context before rotating text
    context.save();
    // rotate the context to draw at an angle
    // the rotation is in radians
    var degrees = 55;
    context.rotate(degrees * 0.01745);
    context.fillText("Main St", 150, -165);
    // restore the context
    context.restore();

    // Add the event location

    context.fillText("Event", 325, 130);
    context.beginPath();
    context.lineWidth = 10;
    context.fillStyle = "blue";
    context.arc(305, 135, 10, 0, 360);
    context.fill();
    context.stroke();
    context.closePath();
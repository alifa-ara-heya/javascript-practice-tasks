/* Traffic Light Simulation
Simulate a traffic light using a variable that holds the current color (red, yellow, green).
Based on the color, print a message:
"Stop" for red.
"Get Ready" for yellow.
"Go" for green. */

function checkColor(color) {
    color = color.toLowerCase();

    if (color == "red"){
        console.log("stop!");
    }
    else if (color == "yellow") {
        console.log("get ready");
    }
    else if (color == "green") {
        console.log("go");
    }
    else {
        console.log("Invalid color");
    }
}

checkColor("Green")
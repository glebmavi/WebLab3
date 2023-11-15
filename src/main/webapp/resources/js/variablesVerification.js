import {drawR, removePoints} from "./drawer.js";
import {drawFromTable} from "./drawFromTable";

const svgWidth = 400;
const svgHeight = 400;

function formListener() {
    const rInputElement = document.getElementById('svgForm:hiddenSvgR');
    const svgGraph = document.getElementById('svgGraph');
    const hiddenX = document.getElementById('svgForm:hiddenSvgX');
    const hiddenY = document.getElementById('svgForm:hiddenSvgY');
    const xText = document.getElementById("svgX");
    const yText = document.getElementById("svgY");
    let x, y;
    svgGraph.onmousemove = function (event) {
        if (rInputElement.value !== "") {
            x = (event.offsetX - (svgWidth/2)) / ((svgWidth*(3/10))/rInputElement.value);
            y = (event.offsetY - (svgHeight/2)) / ((svgHeight*(-3/10))/rInputElement.value);
            hiddenX.value = x.toFixed(3);
            hiddenY.value = y.toFixed(3);
            xText.innerHTML = "X= " + x.toFixed(3);
            yText.innerHTML = "Y= " + y.toFixed(3);
        }
    };
    svgGraph.addEventListener('click', function (event) {
        const button = document.getElementById('svgForm:svgFormButton');
        button.click();
    });

}

function handleRChange() {
    const RText = document.getElementsByClassName("RText");
    const RHalfText = document.getElementsByClassName("RHalfText");
    const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
    const MinusRText = document.getElementsByClassName("MinusRText");
    const rInputElement = document.getElementById('svgForm:hiddenSvgR');

    rInputElement.addEventListener("change", function () {
        drawR(rInputElement.value, RText, RHalfText, MinusRHalfText, MinusRText);
        removePoints();
        drawFromTable();
    });
}

export {formListener, handleRChange};

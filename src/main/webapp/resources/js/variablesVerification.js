import {drawR, removePoints} from "./drawer.js";
import {drawFromTable} from "./drawFromTable.js";

const svgWidth = 400;
const svgHeight = 400;

const translations = {
    "en": {
        "selectR": "Select R first",
    },
    "ru": {
        "selectR": "Сначала выберите R",
    },
    "es": {
        "selectR": "Seleccione R primero",
    },
};

function formListener(locale) {
    const rInputElement = document.getElementById('svgForm:hiddenSvgR');
    const svgGraph = document.getElementById('svgGraph');
    const hiddenX = document.getElementById('svgForm:hiddenSvgX');
    const hiddenY = document.getElementById('svgForm:hiddenSvgY');
    const xText = document.getElementById("svgX");
    const yText = document.getElementById("svgY");
    let x, y;
    svgGraph.onmousemove = function (event) {
        const rMessage = document.getElementById("svgForm:RMessage");
        rMessage.innerHTML = "";
        if (rInputElement.value !== "") {
            x = (event.offsetX - (svgWidth/2)) / ((svgWidth*(3/10))/rInputElement.value);
            y = (event.offsetY - (svgHeight/2)) / ((svgHeight*(-3/10))/rInputElement.value);
            hiddenX.value = x.toFixed(3);
            hiddenY.value = y.toFixed(3);
            xText.innerHTML = "X= " + x.toFixed(3);
            yText.innerHTML = "Y= " + y.toFixed(3);
        } else {
            rMessage.innerHTML = translations[locale].selectR;
        }
    };
    svgGraph.addEventListener('click', function (event) {
        document.getElementById('svgForm:svgFormButton').click();
    });

}

function handleRChange() {
    const RText = document.getElementsByClassName("RText");
    const RHalfText = document.getElementsByClassName("RHalfText");
    const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
    const MinusRText = document.getElementsByClassName("MinusRText");
    const rInputElement = document.getElementById('svgForm:hiddenSvgR');

    rInputElement.addEventListener("valueChange", function () {
        const rMessage = document.getElementById("svgForm:RMessage");
        rMessage.innerHTML = "";
        drawR(rInputElement.value, RText, RHalfText, MinusRHalfText, MinusRText);
        removePoints();
        drawFromTable();
    });
}

function activateXButtons() {
    const xButtons = document.getElementsByClassName("xButton");
    const xValues = document.getElementById("form:xValue").innerHTML;
    let match = xValues.match(/[-.\d]+/g);
    if (match !== null) {
        match = match.map(parseFloat);
        for (let button of xButtons) {
            const buttonValue = parseFloat(button.value);

            if (match.includes(buttonValue)) {
                button.classList.toggle('active');
            }
        }
    }
}

export {formListener, handleRChange, activateXButtons};

import {drawR, drawPoint} from "./drawer";

function drawFromTable() {
    const RText = document.getElementsByClassName("RText");
    const RHalfText = document.getElementsByClassName("RHalfText");
    const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
    const MinusRText = document.getElementsByClassName("MinusRText");
    const svgGraph = document.getElementById("svgGraph");
    const xValues = document.getElementsByClassName("xTableData");
    const yValues = document.getElementsByClassName("yTableData");
    const rValues = document.getElementsByClassName("rTableData");
    const hitValues = document.getElementsByClassName("isHitTableData");
    const rInput = document.getElementById('svgForm:hiddenSvgR')
    let rValue;
    if (rInput.value === "" && rValues.length !== 0) {
        rValue = rValues[0].innerHTML
    } else if (rInput.value !== "") {
        rValue = rInput.value;
    } else {
        return;
    }
    drawR(rValue, RText, RHalfText, MinusRHalfText, MinusRText);
    for (let i = 0; i < xValues.length; i++) {
        if (rValues[i].innerHTML === rValue) {
            drawPoint(xValues[i].innerHTML, yValues[i].innerHTML, rValue, svgGraph, hitValues[i].innerHTML);
        }
    }

}

export {drawFromTable};
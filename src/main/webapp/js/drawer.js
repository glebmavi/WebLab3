function drawR(R, RText, RHalfText, MinusRHalfText, MinusRText) {

    for (let textElement of RText) {
        textElement.innerHTML = R.toString();
    }
    for (let textElement of RHalfText) {
        textElement.innerHTML = (R/2).toString();
    }
    for (let textElement of MinusRHalfText) {
        textElement.innerHTML = (-R/2).toString();
    }
    for (let textElement of MinusRText) {
        textElement.innerHTML = (-R).toString();
    }
}

function drawPoint(X, Y, R, svgGraph, isHit) {
    let multiplier = 6 / R;
    const newPoint = document.createElementNS("http://www.w3.org/2000/svg", 'use');
    newPoint.setAttribute("x", (X * multiplier).toString());
    newPoint.setAttribute("y", (Y * -multiplier).toString());
    newPoint.setAttribute("href", "#circle");
    newPoint.setAttribute("class", "usedCircle");
    if (isHit === "true") {
        newPoint.setAttribute("fill", "green");
    } else if (isHit === "false") {
        newPoint.setAttribute("fill", "red");
    }
    svgGraph.append(newPoint);
}


function removePoints() {
    const useElements = document.querySelectorAll(`svg use.usedCircle`);

    useElements.forEach(function (useElement) {
        useElement.remove();
    });
}

export {drawR, drawPoint, removePoints};

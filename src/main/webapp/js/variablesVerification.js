import {drawR, removePoints} from "./drawer.js";
import {loadData, writeInputs} from "./loadData.js";
import {handleResponse, sendRequest} from "./responseGetter";
import {drawFromTable} from "./drawFromTable";

const translations = {
    "en": {
        "correctInput": "Correct input",
        "numberTooLarge": "Error! Number too large",
        "numberOutOfRange": "Error! Enter a number from -5 to 3",
        "selectR": "Select R first",
    },
    "ru": {
        "correctInput": "Верный ввод",
        "numberTooLarge": "Ошибка! Слишком длинное число",
        "numberOutOfRange": "Ошибка! Введите число от -5 до 3",
        "selectR": "Сначала выберите R",
    },
    "es": {
        "correctInput": "Valor correcto",
        "numberTooLarge": "Error! Número demasiado largo",
        "numberOutOfRange": "Error! Introduzca un número de -5 a 3",
        "selectR": "Seleccione R primero",
    },
};

const svgWidth = 400;
const svgHeight = 400;

function formListener(locale) {
    const RText = document.getElementsByClassName("RText");
    const RHalfText = document.getElementsByClassName("RHalfText");
    const MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
    const MinusRText = document.getElementsByClassName("MinusRText");
    const loadedData = loadData();
    let xSet, ySet, rSet = false;
    const submitElement = document.getElementById('submitButton');
    checkVariablesSet();

    const xCheckboxes = document.querySelectorAll('.Xselection');
    const xValue = document.getElementById('xValue');
    const selectedXValues = [];

    xCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                selectedXValues.push(checkbox.value);
                xSet = true;
            } else {
                const index = selectedXValues.indexOf(checkbox.value);
                if (index !== -1) {
                    selectedXValues.splice(index, 1);
                }
                if (selectedXValues.length === 0) {
                    xSet = false;
                }
            }
            xValue.innerText = 'X= ' + selectedXValues;
            checkVariablesSet();
            localStorage.setItem('X', selectedXValues.toString());
        });
    });

    const yInputElement = document.getElementById('YText');
    const validationMessageElement = document.getElementById("YMessage");
    const yValue = document.getElementById('yValue');

    yInputElement.addEventListener("input", function () {
        const inputValue = yInputElement.value;

        if (!(inputValue.search(/[^0-9.-]/) !== -1) && (inputValue.length < 18) && (!isNaN(parseFloat(inputValue))) && parseFloat(inputValue) >= -5 && parseFloat(inputValue) <= 3) {
            validationMessageElement.textContent = translations[locale].correctInput;
            validationMessageElement.style.color = "#22AA22";
            yValue.innerText = 'Y= ' + parseFloat(inputValue);
            ySet = true;
            checkVariablesSet();
        } else if (inputValue.length >= 18) {
            validationMessageElement.textContent = translations[locale].numberTooLarge;
            validationMessageElement.style.color = "#AA2222";
            ySet = false;
            checkVariablesSet();
        } else {
            validationMessageElement.textContent = translations[locale].numberOutOfRange;
            validationMessageElement.style.color = "#AA2222";
            ySet = false;
            checkVariablesSet();
        }
        localStorage.setItem('Y', inputValue);
    });

    const rInputElement = document.getElementById('RSelect');
    const rValue = document.getElementById('rValue');

    rInputElement.addEventListener("change", function () {
        rValue.innerText = 'R= ' + rInputElement.value;
        rSet = true;
        checkVariablesSet();
        drawR(rInputElement.value, RText, RHalfText, MinusRHalfText, MinusRText);
        removePoints();
        drawFromTable();
        localStorage.setItem('R', rInputElement.value);
    });

    writeInputs(loadedData.xValues, loadedData.yValue, loadedData.rValue);

    const svgGraph = document.getElementById('svgGraph');
    const form = document.getElementById('form');
    let x, y;
    svgGraph.onmousemove = function (event) {
        if (rSet) {
            x = (event.offsetX - (svgWidth/2)) / ((svgWidth*(3/10))/rInputElement.value);
            y = (event.offsetY - (svgHeight/2)) / ((svgHeight*(-3/10))/rInputElement.value);
            document.getElementById('svgX').innerHTML = "X=" + x.toFixed(3);
            document.getElementById('svgY').innerHTML = "Y=" + y.toFixed(3);
        }
    };
    svgGraph.addEventListener('click', function (event) {
        if (rSet && x && y) {
            const formData = new FormData(form);
            formData.set("X", x);
            formData.set("Y", y);
            sendRequest(formData).then(r => handleResponse());
        }
        else {
            alert(translations[locale].selectR);
        }
    });

    function checkVariablesSet() {
        submitElement.disabled = !(xSet && ySet && rSet);
    }

}

export {formListener};

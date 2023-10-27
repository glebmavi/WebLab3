function loadData() {
    const xValuesString = localStorage.getItem('X');
    const xValues = xValuesString ? xValuesString.split(',') : [];
    const yValue = localStorage.getItem('Y');
    const rValue = localStorage.getItem('R');
    return {xValues, yValue, rValue};

}

/* Write {@link xValues}, {@link yValue} and {@link rValue} to the page
* @param xValues - array of x values
* @param yValue - y value
* @param rValue - r value
 */
function writeInputs(xValues, yValue, rValue) {

    xValues.forEach(function (xValue) {
        const xCheckbox = document.querySelector(`.Xselection[value="${xValue}"]`);
        if (xCheckbox) {
            xCheckbox.checked = false;
            xCheckbox.click();
        }
    });

    const yInput = document.getElementById('YText');
    if (yValue !== null) {
        yInput.value = yValue;
        yInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    const rInput = document.getElementById('RSelect');
    if (rValue !== null) {
        rInput.value = rValue;
        rInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

}

export {loadData, writeInputs};

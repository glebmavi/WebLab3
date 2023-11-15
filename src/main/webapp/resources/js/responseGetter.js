function responseGetter() {
    const form = document.getElementById('form');

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        sendRequest(formData).then(r => handleResponse());
    });
}

async function sendRequest(formData) {

    try {
        const response = await fetch("/WebProgLab3/controller", {
            method: "POST",
            dataType: "json",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    } catch (error) {
        alert('Error: ' + error.message);
    }
}

function handleResponse() {
    document.location.href = "result.jsp";
}

export {responseGetter, sendRequest, handleResponse};

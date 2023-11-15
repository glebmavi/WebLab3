function resetTable() {
    const resetButton = document.getElementById('resetTable');
    resetButton.addEventListener('click', () => {
        const response = fetch("/WebProgLab2/controller", {
            method: "DELETE",
        });
        response.then(() => {
            location.reload();
        });
    });
}

export {resetTable};
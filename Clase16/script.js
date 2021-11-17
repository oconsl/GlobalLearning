window.addEventListener("DOMContentLoaded",() => {
    console.log("Página cargada.");
    let i = 0;
    const button = document.querySelector('#click');
    button.addEventListener("click", () => {
        console.log(i);
        i++;
    });
});

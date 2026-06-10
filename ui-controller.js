window.toggleAppMode = function () {
    const isApp = localStorage.getItem("app-mode") === "1";

    localStorage.setItem("app-mode", isApp ? "0" : "1");
    location.reload(); // aplica em todas as páginas
};

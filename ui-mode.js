export function initUIMode() {
    const isApp = localStorage.getItem("app-mode") === "1";

    if (isApp) {
        document.body.classList.add("app-mode");
    } else {
        document.body.classList.remove("app-mode");
    }
}

window.toggleAppMode = function () {
    const isApp = localStorage.getItem("app-mode") === "1";

    localStorage.setItem("app-mode", isApp ? "0" : "1");

    // aplica imediatamente sem precisar recarregar
    document.body.classList.toggle("app-mode");

    // opcional: atualizar ícone
    const icon = document.getElementById("device-icon");
    if (icon) {
        icon.className = isApp
            ? "fa-solid fa-mobile-screen"
            : "fa-solid fa-desktop";
    }
};

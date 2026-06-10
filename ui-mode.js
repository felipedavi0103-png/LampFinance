export function applyUIMode() {
    const isApp = localStorage.getItem("app-mode") === "1";

    if (isApp) {
        document.body.classList.add("app-mode");
    } else {
        document.body.classList.remove("app-mode");
    }
}

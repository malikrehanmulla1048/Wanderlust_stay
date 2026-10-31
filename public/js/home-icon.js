const homeLink = document.querySelector(".home-link");

if (homeLink) {
    homeLink.addEventListener("click", (event) => {
        if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        event.preventDefault();
        homeLink.classList.add("is-turning");

        window.setTimeout(() => {
            window.location.assign(homeLink.href);
        }, 450);
    });
}

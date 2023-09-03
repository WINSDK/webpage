const animatedElements = [...document.querySelectorAll(".animwrap")];

function updateAnimated() {
    const animated = animatedElements[Math.floor(Math.random() * animatedElements.length)];
    const chars = [...animated.querySelectorAll("span")];
    const selected = Math.floor(Math.random() * chars.length);

    for (const [idx, char] of chars.entries()) {
        char.classList.remove("-tr1"),
        char.classList.remove("-tr2");

        if (selected == idx) {
            const n = Math.floor(2 * Math.random()) + 1;
            char.classList.add(`-tr${n}`);
        }
    }
}

setInterval(updateAnimated, 3000);

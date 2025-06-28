const loader = document.createElement("div");
loader.style.position = "fixed";
loader.style.top = "0";
loader.style.left = "0";
loader.style.width = "100%";
loader.style.height = "100%";
loader.style.background = "black";
loader.style.display = "flex";
loader.style.flexDirection = "column";
loader.style.justifyContent = "center";
loader.style.alignItems = "center";
loader.style.zIndex = "9999";
loader.innerHTML = `<div class="spinner"></div>
                    <p class="loading-text">Loading...</p>`;
document.body.appendChild(loader);

setTimeout(() => {
    loader.style.display = "none";
}, 2000);


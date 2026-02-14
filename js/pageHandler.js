let currentPage = null;
async function loadPage(pageName) {
    
    if (currentPage && currentPage.destroy) {
        currentPage.destroy();
    }

    const res = await fetch(`/pages/${pageName}.html`);
    const html = await res.text();
    const app = document.getElementById("app");
    app.innerHTML = html;
 
    try {
        currentPage = await import(`/js/${pageName}/boot.js`);
        if (currentPage.init) currentPage.init();
    } catch (e) {
        console.warn("No boot file for page:", pageName);
        currentPage = null;
    }
}

document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
        const page = btn.dataset.page;
        loadPage(page);
    });
});

loadPage("terminal");


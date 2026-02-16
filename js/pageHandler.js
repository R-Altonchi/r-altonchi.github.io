let currentPage = null;

export async function loadPage(pageName) {

  if (currentPage && currentPage.destroy) {
    currentPage.destroy();
  }

  const res = await fetch(`pages/${pageName}.html`);
  const html = await res.text();
  console.log("Loaded HTML:", html);
  document.getElementById("app").innerHTML = html;

  try {
    currentPage = await import(`/js/${pageName}/main.js`);
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

window.navigate = loadPage;

loadPage("terminal");


const username = "r-altonchi";
const topic = "portfolio";

async function fetchProjects() {
  try { 
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const filtered = repos
      .filter(repo => repo.topics?.includes(topic))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const container = document.getElementById("projects");

    filtered.forEach(repo => {
      const year = new Date(repo.created_at).getFullYear();
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a> (${year})</h3>
        <p>${repo.description || "No description"}</p>
        <p class="lang">Main language: ${repo.language || "Unknown"}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to fetch repos:", err);
  }
}

export function init() {
  fetchProjects();
}

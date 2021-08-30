const API_URL = "https://api.github.com/users/emilynievesb/repos";

function showRepos(repo) {
    let html = "<ul>";
    let container = document.getElementById("repos");
    repo.forEach((element) => {
        const { name } = element;
        const { login } = element.owner;
        const { avatar_url } = element.owner;
        const { html_url } = element;
        html += `<li>
        <span><strong>
        Project Name: </strong>${name}
        </span>
        <p><strong>
        Author: </strong>${login}</p>
        <img src="${avatar_url}" alt="avatar-repo">
        <button><a href="${html_url}" target="_blank">Ver repositorio</a></button>
        </li>`;
    });
    html += "<ul>";
    container.innerHTML = html;
}

async function getRepos() {
    const res = await fetch(API_URL);
    const result = await res.json();
    showRepos(result);
}

getRepos();

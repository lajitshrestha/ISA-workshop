const form = document.querySelector('form');
const searchBtn = document.querySelector('#search-btn');
const repoList = document.querySelector('#repo-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            repoList.innerHTML = '';
            data.forEach((repo) => {
                const li = document.createElement('li');
                li.textContent = repo.name;
                repoList.appendChild(li);
            });
        })
        .catch((error) => console.error(error));
});

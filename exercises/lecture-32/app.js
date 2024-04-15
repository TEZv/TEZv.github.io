const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const fetchWithPosts = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Sorry, failed to fetch posts");
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

console.log(xhrPromise("GET", url));

xhrPromise("GET", url)
  .then((response) => {
    const posts = JSON.parse(response);
    let result = "";
    posts.forEach((item) => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
  })

  .then(() => {
    const users = document.querySelectorAll(".author");
    users.forEach((user) => {
      xhrPromise(
        "GET",
        `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`
      ).then((response) => {
        let userName = JSON.parse(response);
        console.log(userName.name);
        user.textContent = userName.name;
      });
    });
  });

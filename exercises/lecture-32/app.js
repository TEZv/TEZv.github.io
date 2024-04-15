// THE TASK 1 SECTION
setTimeout(() => {
  const firstNameInput = document.querySelector("#demoForm [name='firstName']");
  const lastNameInput = document.querySelector("#demoForm [name='lastName']");
  const userGreeting = document.getElementById("waiting");

  if (firstNameInput && lastNameInput) {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (!firstName && !lastName) {
      userGreeting.textContent = "Please, fill the First Name and the Last Name below";
    } else {
      userGreeting.textContent = `You are in time! I Welcome You, ${firstName} ${lastName}!`;
    }
  }
}, 10000);
// THE TASK 1 SECTION

// THE TASK 2 SECTION
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function () {
  const posts = JSON.parse(xhr.responseText);
  const demo = document.getElementById("demo");

  const renderPosts = (posts) => {
    return posts.map((post) => {
      return `
        <p>Post №: ${post.id}</p>
        <h3>${post.title}</h3>
        <div>${post.body}</div>
      `;
    }).join("");
  };

  demo.innerHTML = renderPosts(posts);
};
xhr.send();
// THE TASK 2 SECTION

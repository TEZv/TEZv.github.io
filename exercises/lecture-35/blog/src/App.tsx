// src/App.tsx
import Blog from "./components/Blog.tsx";
import React from "react";

function App() {
  let post: any = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/vite.svg",
    likes: 5,
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Blog post={post} key={post.id} />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";

import PostList from "./components/PostList/PostList";
import Header from "./components/header/Header";


// importing Bootstrap Components
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App bg-light">
      <Header />
      <div className=" container main">
        <PostList />
      </div>
    </div>
  );
};

export default App;

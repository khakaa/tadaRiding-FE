import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import PostDetail from "../pages/PostDetail";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Route path="/Login" exact component={Login} /> */}
        {/* <Route path="/SignUp" exact component={SignUp} /> */}
        {/* <Route path="/Mypage" exact component={MyPage} /> */}
        {/* <Route path="/" exact component={PostList} /> */}
        <Route path="/PostWrite" exact component={PostWrite} />
        <Route path="/PostDetail" exact component={PostDetail} />
      </BrowserRouter>
    </>
  );
}
export default App;

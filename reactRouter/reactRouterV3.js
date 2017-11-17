import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";

// 两个子页面
const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;

// 主布局
const PrimaryLayout = props =>
  <div className="primary-layout">
    <header>Our React Router 3 App</header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
    </ul>
    <main>
      // 子路由嵌套
      {props.children}
    </main>
  </div>;

// 定义路由
const App = () =>
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />  //默认界面
      <Route path="/user" component={UsersPage} />  //嵌套在主布局之中
    </Route>
  </Router>;

render(<App />, document.getElementById("root"))

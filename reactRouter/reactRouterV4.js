// https://zhuanlan.zhihu.com/p/28585911
import React from "react";
import { render } from "react-dom";
// 不再从react-router引入,改为从react-router-dom引入
import { BrowserRouter, Route, Link } from "react-router-dom";

// 两个子页面
const HomePage = () => <h1>Home Page</h1>;
const UsersPage = ({match}) => <h1>`地址栏id为 ${match.params.topicId}`</h1>;

// 主布局
const PrimaryLayout = () =>
  <div className="primary-layout">
    <header>Our React Router 4 App</header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/User">User</Link>
      </li>
    </ul>
    <main>
      // 子路由嵌套,与v3有所不同,不再需要{props.children}来嵌套组件,route匹配时会自动渲染
      <Route path="/" exact component={HomePage} /> // exact为严格匹配
      <Route path="/user" component={UsersPage} />
    </main>
  </div>;

// 定义路由,与v3有所不同
const App = () =>
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>;

render(<App />, document.getElementById("root"));


//  如果只想匹配一个 route，也可以使用 <Switch> 来 exclusive routing(嵌套路由)
 const PrimaryLayout = () =>
  <div className="primary-layout">
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/:id" component={UsersPage} />
        <Route path="/user" component={} />
        <Redirect to="/" />  //前面所有路由都不匹配时,重定向到主页
      </Switch>
    </main>
  </div>;

  // 如果组件不通过 <Route> 来渲染，要访问 props.match，可以使用 withRouter() 高阶组件来实现
  // match.url 是浏览器 URL 的一部分，match.path 是我们为 router 书写的路径
  // 官网写的demo中,用的是march.url,如 <Link to={`${match.url}/rendering`}>
  // match:
  //     path - (string) The path pattern used to match. Useful for building nested(嵌套) <Route>s
  //     url - (string) The matched portion of the URL. Useful for building nested <Link>s

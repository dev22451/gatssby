import * as React from "react"
import '../Style.css'
import { useEffect, useState } from "react"
import axios from "axios"
import SignupPage from '../components/SignupPage'
import LineChart from '../components/LineChart'
import Navbar from "../components/Navbar"
import App from "../components/App"
import Posts from "../components/Posts"
import Pagination from "../components/Pagination"
import SignupInfo from '../components/SignupInfo'
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../components/LoginPage"
import ForgetPassword from "../components/ForgetPassword"
// import { Router, Switch, Route, Link } from "@reach/router"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom"
import TodoContainer from '../Container/TodoContainer'

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://www.grabthetrendz.com/troubleshooter/get/services");
      setPosts(res.data.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);


  //  get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //  change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Router>
        <Link to="/"></Link>
        <Switch>
          <Route exact path="/" >
            <LoginPage />
          </Route>
          <Route exact path="/forget/components">
            <ForgetPassword />
          </Route>
          <Route exact path="/signup/components">
            <SignupPage />
          </Route>
          <Router>
            <Switch>
              <Route exact path="/signupinfo/components">
                <SignupInfo />
              </Route>
              <Route exact path="/login/components">
                <LoginPage />
              </Route>
              <Route exact path="/linechart/components">
                <LineChart />
              </Route>
            </Switch>
          </Router>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/linechart/components'>
                <div className="col-md-8 offset-md-2 ">
                  <div className="chart">
                    <LineChart />
                  </div>
                </div>
              </Route>
              <Route path="/posts/components">
                <Posts posts={currentPosts} loading={loading} /><br />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} Paginate={paginate} />
              </Route>
              {/* <Route path='/calender' exact component={posts} /> */}
              <Route path='/products' component={ForgetPassword} />
            </Switch>
          </Router>
        </Switch>
      </Router >
      <div className="App">
        <h2>Todo App</h2>
        <TodoContainer />
      </div>
    </div>

  )
}

export default IndexPage

//libraries
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//pages
import BlogPost from "../pages/BlogPost/BlogPost";
import Hooks from "../pages/Hooks/Hooks";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YouTubeCompPage from "../pages/YouTubeCompPage/YouTubeCompPage";
import App from "../pages/Progate/Modal/App";

//styles
import './Home.css';

class Home extends Component {
  state = {
    showComponent: true,
  };


  render() {
    return (
      <Router>      
        <Fragment>
            <div className="navigation">
                <Link to="/">Blog Post</Link>
                <Link to="/product">Product</Link>
                <Link to="/lifecycle">Lifecycle</Link>
                <Link to="/youtube-comp">Youtube</Link>
                <Link to="/hooks">Hooks</Link>
                <Link to="/progate-modal">Modal</Link>
            </div>
            <Route path="/" exact component={BlogPost}/>
            <Route path="/detail-post/:postID" exact component={DetailPost}/>
            <Route path="/product" component={Product}/>
            <Route path="/lifecycle" component={LifeCycleComp}/>
            <Route path="/youtube-comp" component={YouTubeCompPage}/>
            <Route path="/hooks" component={Hooks}/>
            <Route path="/progate-modal" component={App}/>
        </Fragment>
      </Router>
    );
  }
}

export default Home;

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
import Sastra from "../../component/Hooks/Sastra";
import ComponentState from "../../component/Hooks/ComponentState";
import SideEffect from "../../component/Hooks/SideEffect";
import StateManagement from "../../component/Hooks/StateManagement";
import PerformanceOptimization from "../../component/Hooks/PerformanceOptimization";

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
            {/* Hooks */}
            <Route path="/sastra" exact component={Sastra}/>
            <Route path="/sastra/component-state" component={ComponentState}/>
            <Route path="/sastra/side-effect" component={SideEffect}/>
            <Route path="/sastra/state-management" component={StateManagement}/>
            <Route path="/sastra/performance-optimization" component={PerformanceOptimization}/>
        </Fragment>
      </Router>
    );
  }
}

export default Home;

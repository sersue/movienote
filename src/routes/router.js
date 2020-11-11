import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/Home/Home";
import Upcoming from "../components/MovieList/Upcoming/Upcoming";
import Movie from "../components/Movie/Movie";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../components/common.css";
import Toprated from "../components/MovieList/Toprated/Toprated";

class Router extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <>
      <Header />
        <Switch>
          <Route path="/" exact={true}><Home/></Route>
          <Route path="/upcoming" exact={true}><Upcoming/></Route>
          <Route path="/movie" component={Movie}></Route>
          <Route path="/toprated" exact={true}><Toprated/></Route>
        </Switch>
      <Footer />
      </>
    </BrowserRouter>
  );
  }
  
}

export default Router;

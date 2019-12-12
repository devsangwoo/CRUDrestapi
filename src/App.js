import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { MainContainer } from "./components/main";
import { GlobalHeader, GlobalNavigation } from "./components/global";
import {
  PostsViewContainer,
  PostViewContainer,
  PostUpdateContainer
} from "./components/post";
import PostCreateContainer from "./components/post/PostCreateContainer";

const App = () => {
  return (
    <>
      <Router>
        <GlobalHeader />
        <GlobalNavigation />
        <Switch>
          <Route path="/" exact component={MainContainer} />
          <Route path="/posts" exact component={PostsViewContainer} />
          <Route path="/posts/create" exact component={PostCreateContainer} />
          <Route path="/posts/:postId" exact component={PostViewContainer} />
          <Route
            path="/posts/:postId/update"
            exact
            component={PostUpdateContainer}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <div>Home</div>} />
          <Route path="/posts" exact component={() => <div>All Posts</div>} />
          <Route
            path="/posts/:postId"
            exact
            component={() => <div>Post individual</div>}
          />
          <Route
            path="/posts/:postId/update"
            exact
            component={() => <div>Update</div>}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;

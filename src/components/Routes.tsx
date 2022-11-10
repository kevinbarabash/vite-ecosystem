import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const Routes: React.FC<{}> = (props) => {
  return (
    <Switch>
      <Route path="/foo">
        <Redirect from="/foo/bar" to="/bar" />
      </Route>
      <Route path="/bar">Hello, world!</Route>
    </Switch>
  );
};

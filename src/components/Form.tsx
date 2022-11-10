import * as React from "react";

import { Button } from "./Button";
import { Header } from "./Header";

export const Form: React.FC<{}> = (props) => {
  return (
    <div>
      <Header />
      <Button>Click me!</Button>
    </div>
  );
};

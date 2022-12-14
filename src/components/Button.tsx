import * as React from "react";
import { setupPreviews } from "@previewjs/plugin-react/setup";

type Props = {
  children: string;
  color?: string;
};

export const Button: React.FC<Props> = ({ children, color }) => {
  return (
    <button
      onClick={() => {
        console.log("click!");
      }}
      style={{
        backgroundColor: color || "transparent",
        fontSize: 18,
      }}
    >
      {children}
    </button>
  );
};

setupPreviews(Button, () => ({
  default: {
    children: "Hello, World!",
  },
  orange: {
    children: "Hello, world!",
    color: "rgb(255, 128, 0)",
  },
  blue: {
    children: "Hello, World!",
    color: "blue",
  },
}));

import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import { Form } from "../Form";

vi.mock("../Header", () => {
  return {
    Header: () => <h2>Foo Bar</h2>,
  };
});

describe("Form", () => {
  it("should render", () => {
    const { container } = render(<Form />);

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      <div>
        <h2>
          Foo Bar
        </h2>
        <button
          style="background-color: transparent; font-size: 18px;"
        >
          Click me!
        </button>
      </div>
    `);
  });
});

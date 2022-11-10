import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../Button";

describe("Button", () => {
  it("should succeed", () => {
    expect(true).toBe(true);
  });

  it("should render", () => {
    const { container } = render(<Button>Hello</Button>);

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      <button
        style="background-color: transparent; font-size: 18px;"
      >
        Hello
      </button>
    `);
  });

  it("should log 'click!' when clicked", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log");

    render(<Button>Hello</Button>);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(logSpy).toHaveBeenCalled();
  });
});

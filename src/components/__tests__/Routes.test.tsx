import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as RRD from "react-router-dom";

import { Routes } from "../Routes";

// Hack to make exports of 'react-router-dom' configurable
vi.mock("react-router-dom", async () => {
  const RRD: any = await vi.importActual("react-router-dom");
  return { ...RRD };
});

describe("Routes", () => {
  it("should render <Redirect> from /foo/bar to /bar when path is /foo", () => {
    const redirectSpy = vi.spyOn(RRD, "Redirect");
    render(
      <MemoryRouter initialEntries={["/foo"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(redirectSpy).toHaveBeenCalledWith(
      { from: "/foo/bar", to: "/bar" },
      {}
    );
  });

  it("should redirect /foo/bar to /bar", async () => {
    render(
      <MemoryRouter initialEntries={["/foo/bar"]}>
        <Routes />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });
  });
});

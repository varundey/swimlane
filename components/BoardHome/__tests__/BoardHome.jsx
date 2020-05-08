import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BoardHome from "../BoardHome";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("Show 'Create new Board' when there are no boards added", () => {
  const { container } = render(<BoardHome />);
  expect(screen.getAllByText("Create new Board")).toHaveLength(1);
  expect(container.querySelectorAll(".ant-card")).toHaveLength(1);
});

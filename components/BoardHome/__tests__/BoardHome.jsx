import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BoardHome from "../BoardHome";
import CreateNewBoard from "../CreateNewBoard";

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
  const { container, getAllByText } = render(<BoardHome />);
  expect(getAllByText("Create new Board")).toHaveLength(1);
  expect(container.querySelectorAll(".ant-card")).toHaveLength(1);
});

test("Click on 'Create new Board' should open a modal", async () => {
  const { findByText, queryByText, queryByPlaceholderText } = render(
    <BoardHome />
  );

  fireEvent.click(queryByText("Create new Board"));
  const modal = await findByText("Create Board");
  expect(modal).toBeTruthy();
  expect(queryByText("Create new Board")).toBeNull();
  expect(queryByPlaceholderText("Enter board title")).toBeTruthy();
  expect(queryByText("Create Board")).toBeTruthy();
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

test("Create and show board", () => {
  const { queryByText, queryByPlaceholderText, container } = render(
    <BoardHome />
  );
  fireEvent.click(queryByText("Create new Board"));
  const boardNameInput = queryByPlaceholderText("Enter board title");
  fireEvent.change(boardNameInput, { target: { value: "Test board name" } });
  fireEvent.click(queryByText("Create Board"));
  expect(container.querySelector(".ant-modal-root")).toBeNull();
  expect(container.querySelectorAll(".ant-card")).toHaveLength(2);
});

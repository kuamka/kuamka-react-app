//
// CatRotator.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";

import { act, cleanup, fireEvent, render } from "@testing-library/react";

import { CatRotator } from "./CatRotator";
import { CatStore } from "../CatStore";
import testCat from "../TestCat.svg";

describe("CatRotator", () => {
  let catStore: CatStore;

  beforeEach(() => {
    catStore = new CatStore();
    catStore.cat = { name: "Test Cat", image: testCat };
  });

  afterEach(() => {
    cleanup();
  });

  test("renders without crashing", () => {
    render(<CatRotator store={catStore} />);
  });

  test("doesn't rotate by default", () => {
    const { container } = render(<CatRotator store={catStore} />);
    expect(container.querySelector(".Rotating")).toBeNull();
  });

  test("rotates when clicked", () => {
    const { container } = render(<CatRotator store={catStore} />);
    const catRotator = container.querySelector(".CatRotator");

    act(() => {
      fireEvent.click(catRotator!);
    });

    expect(container.querySelector(".Rotating")).not.toBeNull();
  });

  test("stops rotating when clicked twice", () => {
    const { container } = render(<CatRotator store={catStore} />);
    const catRotator = container.querySelector(".CatRotator");

    act(() => {
      fireEvent.click(catRotator!);
    });

    expect(container.querySelector(".Rotating")).not.toBeNull();

    act(() => {
      fireEvent.click(catRotator!);
    });

    expect(container.querySelector(".Rotating")).toBeNull();
  });
});

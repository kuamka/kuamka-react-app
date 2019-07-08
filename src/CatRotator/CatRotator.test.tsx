//
// CatRotator.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";

import { act, cleanup, fireEvent, render } from "@testing-library/react";

import { CatRotator } from "./CatRotator";
import testCat from "../TestCat.svg";

afterEach(() => {
  cleanup();
});

const catInfo = {
  name: "Test Cat",
  image: testCat
};

describe("CatRotator", () => {
  test("renders without crashing", () => {
    render(<CatRotator cat={catInfo} />);
  });

  test("doesn't rotate by default", () => {
    const { container } = render(<CatRotator cat={catInfo} />);
    expect(container.querySelector(".Rotating")).toBeNull();
  });

  test("rotates when clicked", () => {
    const { container } = render(<CatRotator cat={catInfo} />);
    const catRotator = container.querySelector(".CatRotator");

    act(() => {
      fireEvent.click(catRotator!);
    });

    expect(container.querySelector(".Rotating")).not.toBeNull();
  });

  test("stops rotating when clicked twice", () => {
    const { container } = render(<CatRotator cat={catInfo} />);
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

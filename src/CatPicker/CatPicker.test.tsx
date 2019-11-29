//
// CatPicker.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";
import { cleanup, render } from "@testing-library/react";

import { CatPicker } from "./CatPicker";
import { CatStore } from "../CatStore";

describe("CatPicker", () => {
  let catStore: CatStore;

  beforeEach(() => {
    catStore = new CatStore();
  });

  afterEach(() => {
    cleanup();
  });

  test("renders without crashing", () => {
    render(<CatPicker store={catStore} />);
  });
});

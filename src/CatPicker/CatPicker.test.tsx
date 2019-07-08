//
// CatRotator.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";
import ReactDOM from "react-dom";

import { CatPicker } from "./CatPicker";
import testCat from "../TestCat.svg";

describe("CatRotator", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    const cats = [
      {
        name: "Test Cat",
        image: testCat
      }
    ];
    ReactDOM.render(<CatPicker cats={cats} onChange={cat => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

//
// CatRotator.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";
import ReactDOM from "react-dom";

import { CatRotator } from "./CatRotator";
import catSVG from "./cat.svg";

describe("CatRotator", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CatRotator name="Test Cat" image={catSVG} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

//
// CatApp.test.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import React from "react";
import ReactDOM from "react-dom";

import { CatApp } from "./CatApp";

describe("CatApp", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CatApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

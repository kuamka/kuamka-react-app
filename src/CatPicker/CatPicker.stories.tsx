//
// CatPicker.stories.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import React from "react";

import { CatPicker } from "./CatPicker";
import testCat from "../TestCat.svg";

const stories = storiesOf("CatPicker", module);

const cats = [
  {
    name: "Cat 1",
    image: testCat
  },
  {
    name: "Cat 2",
    image: testCat
  },
  {
    name: "Cat 3",
    image: testCat
  }
];

stories.add("render", () => (
  <CatPicker cats={cats} onChange={action("New cat selected")} />
));

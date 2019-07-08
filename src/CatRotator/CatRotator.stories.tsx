//
// CatRotator.stories.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import React from "react";

import { CatRotator } from "./CatRotator";
import testCat from "../TestCat.svg";

const stories = storiesOf("CatRotator", module);
stories.addDecorator(withKnobs);

const catInfo = {
  name: text("Cat name", "Test Cat"),
  image: text("Cat image", testCat)
};

stories.add("render", () => <CatRotator cat={catInfo} />);

//
// CatPicker.stories.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import { storiesOf } from "@storybook/react";

import React from "react";

import { CatPicker } from "./CatPicker";
import { CatStore } from "../CatStore";

const stories = storiesOf("CatPicker", module);

const store = new CatStore();

stories.add("render", () => <CatPicker store={store} />);

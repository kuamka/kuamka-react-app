//
// CatRotator.stories.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import { storiesOf } from "@storybook/react";

import React from "react";

import { CatRotator } from "./CatRotator";
import { CatStore } from "../CatStore";

const stories = storiesOf("CatRotator", module);

const store = new CatStore();

stories.add("render", () => <CatRotator store={store} />);

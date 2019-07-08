//
// CatApp.stories.tsx
//
// Copyright © 2019 Kuamka Ltd All rights reserved.
//

import { storiesOf } from "@storybook/react";

import React from "react";

import { CatApp } from "./CatApp";

const stories = storiesOf("CatApp", module);

stories.add("render", () => <CatApp />);

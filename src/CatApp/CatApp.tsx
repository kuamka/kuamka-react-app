//
// CatApp.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import React from "react";

import { CatRotator } from "../CatRotator/CatRotator";
import { CatPicker } from "../CatPicker/CatPicker";
import { CatStore } from "../CatStore";

import "./CatApp.scss";

const catStore = new CatStore();

export const CatApp = () => {
  return (
    <div className="CatApp">
      <CatPicker store={catStore} />
      <CatRotator store={catStore} />
    </div>
  );
};

//
// CatApp.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import React, { useState } from "react";

import { CatRotator } from "../CatRotator/CatRotator";
import { CatPicker } from "../CatPicker/CatPicker";

import custard from "./Custard.jpg";
import heidi from "./Heidi.jpg";
import marple from "./Marple.jpg";
import moneypenny from "./Moneypenny.jpg";

import "./CatApp.scss";

const cats = [
  { name: "Miss Marple", image: marple },
  { name: "Miss Moneypenny", image: moneypenny },
  { name: "Custard", image: custard },
  { name: "Heidi", image: heidi }
];
export const CatApp = () => {
  const [state, setState] = useState({ cat: cats[0] });

  return (
    <div className="CatApp">
      <CatPicker
        cats={cats}
        onChange={newCat => {
          setState({ cat: newCat });
        }}
      />
      <CatRotator cat={state.cat} />
    </div>
  );
};

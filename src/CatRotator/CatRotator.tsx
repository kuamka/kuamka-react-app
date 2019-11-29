//
// CatRotator.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import { observer } from "mobx-react-lite";
import React from "react";

import { CatStore } from "../CatStore";

import "./CatRotator.scss";

export interface CatRotatorProps {
  store: CatStore;
}

export const CatRotator = observer((props: CatRotatorProps) => {
  return (
    <div
      className="CatRotator"
      onClick={() => {
        props.store.rotating = !props.store.rotating;
      }}
    >
      <img
        className={props.store.rotating ? "Image Rotating" : "Image"}
        src={props.store.cat.image}
        alt={props.store.cat.name}
      />
      <span className="Name">{props.store.cat.name}</span>
    </div>
  );
});

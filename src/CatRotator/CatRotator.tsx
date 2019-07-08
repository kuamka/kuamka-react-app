//
// CatRotator.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import React, { useState } from "react";

import { CatInfo } from "../CatInfo";

import "./CatRotator.scss";

export interface CatRotatorProps {
  cat: CatInfo;
}

export const CatRotator = React.memo((props: CatRotatorProps) => {
  const [state, setState] = useState({ rotating: false });

  return (
    <div
      className="CatRotator"
      onClick={() => {
        setState({ rotating: !state.rotating });
      }}
    >
      <img
        className={state.rotating ? "Image Rotating" : "Image"}
        src={props.cat.image}
      />
      <span className="Name">{props.cat.name}</span>
    </div>
  );
});

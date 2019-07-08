//
// CatRotator.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import React, {useState} from "react";

import "./CatRotator.scss";

export interface CatRotatorProps {
  name: string;
  image: string;
}

export const CatRotator = React.memo((props: CatRotatorProps) => {
  const [state, setState] = useState({ rotating: false });

  return <div className="CatRotator" onClick={()=>{
    setState({rotating: !state.rotating});
  }}>
      <img className={state.rotating ? "Image Rotating" : "Image"} src={props.image} />
      <span className="Name">{props.name}</span>
  </div>;
});

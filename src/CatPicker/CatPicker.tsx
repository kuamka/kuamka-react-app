//
// CatPicker.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import React, { useState } from "react";
import Select from "react-select";

import { CatInfo } from "../CatInfo";

import "./CatPicker.scss";

export interface CatPickerProps {
  cats: CatInfo[];
  onChange: (cat: CatInfo) => void;
}

export const CatPicker = React.memo((props: CatPickerProps) => {
  const options = props.cats.map(cat => {
    return { label: cat.name, value: cat };
  });

  const [state, setState] = useState({ selectedOption: options[0] });

  return (
    <div className="CatPicker">
      <Select
        value={state.selectedOption}
        options={options}
        onChange={(newOption: any) => {
          props.onChange(newOption.value);
          setState({ selectedOption: newOption });
        }}
      />
    </div>
  );
});

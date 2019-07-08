//
// CatPicker.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import React from "react";
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

  return (
    <div className="CatPicker">
      <Select
        options={options}
        onChange={(selectedOption: any) => {
          props.onChange(selectedOption.value);
        }}
      />
    </div>
  );
});

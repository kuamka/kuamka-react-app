//
// CatPicker.tsx
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import { observer } from "mobx-react-lite";
import React from "react";
import Select from "react-select";

import { CatStore } from "../CatStore";

import "./CatPicker.scss";

export interface CatPickerProps {
  store: CatStore;
}

export const CatPicker = observer((props: CatPickerProps) => {
  const options = props.store.availableCats.map(cat => {
    return { label: cat.name, value: cat };
  });

  return (
    <div className="CatPicker">
      <Select
        value={options.find(option => {
          return option.value === props.store.cat;
        })}
        options={options}
        onChange={(newOption: any) => {
          props.store.cat = newOption.value;
        }}
      />
    </div>
  );
});

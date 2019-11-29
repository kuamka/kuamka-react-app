//
// CatStore.ts
//
// A store that uses mobx for changes rather than drilling state
//
// Copyright © 2019 Kuamka Ltd. All rights reserved.
//

import { observable } from "mobx";

import { CatInfo } from "./CatInfo";

import custard from "./Custard.jpg";
import heidi from "./Heidi.jpg";
import marple from "./Marple.jpg";
import moneypenny from "./Moneypenny.jpg";

export class CatStore {
  @observable
  public availableCats: CatInfo[] = [
    { name: "Miss Marple", image: marple },
    { name: "Miss Moneypenny", image: moneypenny },
    { name: "Custard", image: custard },
    { name: "Heidi", image: heidi }
  ];

  @observable
  public cat = this.availableCats[0];

  @observable
  public rotating = false;
}

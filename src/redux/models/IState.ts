import { IData } from "../../models/IData";

export interface IState {
  data: IValue;
}

interface IValue {
  value: IData[];
}

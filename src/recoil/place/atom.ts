import {atom} from 'recoil';

export interface IPlace {
  id: number;
  name: string;
  address: string;
}

const placeListDummy : IPlace[] = [
  {id:1, name: "1_test", address: "sdjf;lasdjf"},
  {id:2, name: "2_test", address: "sdjf;lasdjf"},
  {id:3, name: "3_test", address: "sdjf;lasdjf"},
  {id:4, name: "4_test", address: "sdjf;lasdjf"},
  {id:5, name: "5_test", address: "sdjf;lasdjf"},
]

const placeAtom = atom<IPlace[]>({
  key: 'placeAtom',
  // default: [],
  default: placeListDummy,
});

export default placeAtom;

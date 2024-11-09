import {atom} from 'recoil';

export interface IMenu {
  id: string;
}


const menuAtom = atom<IMenu>({
  key: 'menuAtom',
  default: {id: "1"},
});

export default menuAtom;

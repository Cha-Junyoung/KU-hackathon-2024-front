import {selector} from 'recoil';
import placeAtom from './atom';

const placeWithFilter = selector({
  key: 'placeWithFilter',
  get: ({get}) => {
    const places = get(placeAtom);

    let filteredPlace = places; // filter logic

    return filteredPlace;
  },
});

export default placeWithFilter;

import reducer, { defaultState } from 'redux/modules/locations';
import deepFreeze from 'deep-freeze';

describe('(Redux) locations', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});

import reducer, { defaultState } from 'redux/modules/game';
import deepFreeze from 'deep-freeze';

describe('(Redux) game', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});

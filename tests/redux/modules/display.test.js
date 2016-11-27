import reducer, { defaultState } from 'redux/modules/display';
import deepFreeze from 'deep-freeze';

describe('(Redux) display', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});

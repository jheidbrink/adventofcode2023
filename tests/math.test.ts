import { add } from '../src/math';

describe('add', () => {
  it('adds 3 + 5 to equal 8', () => {
    expect(add(3, 5)).toBe(8);
  });
});

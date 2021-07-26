import add from '@src/ma/sum/add';

describe('sum test', () => {
  it('get sum', () => {
    expect(add(2, 4)).toBe(6);
  });
  it('one more get sum', () => {
    expect(add(2, 10)).toBe(12);
  });
  it('wrong sum', () => {
    expect(add(2, 10)).not.toBe(10);
  });
});

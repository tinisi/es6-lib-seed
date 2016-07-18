import library from '../src/library';

describe('library', () => {
  it('upper cases, prepends woot and appends yeah to input', () => {
    let result = library('xxxxx');
    expect(result).toEqual('WOOTXXXXXYEAH');
  });
});

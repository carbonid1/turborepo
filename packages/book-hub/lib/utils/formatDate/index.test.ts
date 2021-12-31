import formatDate from '.';

describe('formatDate function', () => {
  it('returns N/A if a timestamp is not provided', () => {
    expect(formatDate(undefined)).toEqual('N/A');
  });
});

const division = require('./division.js');

test('passes when 6 divide by 3 equal 2', () => {
    expect(division(6, 3)).toBe(2);
})

test('passes when you try divide by 0', () => {
    expect(division(6, 0)).toEqual('You cannot divide by 0 !');
})

test('passes when value is not a string', () => {
    expect(division(4,2)).not.toBe('');
})

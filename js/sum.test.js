const sum = require('./sum.js');

test('passes when 2 + 3 equal 5', () => {
    expect(sum(2, 3)).toBe(5);
})

test('passes when -2 + (-2) equal -4', () => {
    expect(sum(-2, -2)).toBe(-4);
})

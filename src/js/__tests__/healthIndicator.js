import healthIndicator from '../healthIndicator.js';

test.each([
    [10, "critical"],
    [90, "healthy"],
    [43, "wounded"],
])(`testing health indicator %a amount`, (amount, expected) => {
    const result = healthIndicator({"health": amount});
    expect(result).toEqual(expected);
});
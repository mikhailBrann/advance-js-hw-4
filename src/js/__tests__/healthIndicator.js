import healthIndicator from '../healthIndicator.js';

test.each([
    [
        [10, 'critical'],
        [90, 'healthy'],
        [43, 'wounded'],
    ]
])('testing health indicator with %a', (amount, expected) => {
    let status = healthIndicator({'health': amount});
    expect(status).toBy(expected);
});
import { calcCompatibility } from '../../lib/compatibility';

test('lib/compatibility/calcCompatibility', () => {
    expect(calcCompatibility(1, 1)).toBe(67);
    expect(calcCompatibility(10000, 100)).toBe(32);
    for(let i = 0;i < 5000;i++) {
        for(let j = i;j < 100;j++) {
            let res = calcCompatibility(i, j);
            expect(res).toBeGreaterThanOrEqual(0);
            expect(res).toBeLessThanOrEqual(100);
        }
    }
});

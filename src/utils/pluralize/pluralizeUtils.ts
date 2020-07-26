/* eslint-disable @typescript-eslint/no-magic-numbers */

export function getPluralform(value: number, first: string, second: string, third: string): string {
    const modulo = value % 10
    const decModulo = value % 100

    if (modulo === 1 && decModulo !== 11) {
        return first
    }

    if (modulo >= 2 && modulo <= 4 && !(decModulo >= 12 && decModulo <= 14)) {
        return second
    }

    return third
}

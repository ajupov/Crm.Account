export function getValueOrEmpty(value?: boolean | string): string {
    if (typeof value === 'boolean') {
        if (value) {
            return 'Да'
        }

        return 'Нет'
    }

    return value === void 0 || value === null || value === '' ? '...' : value
}

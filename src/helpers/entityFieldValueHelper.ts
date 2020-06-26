export function getValueOrEmpty(value?: boolean | string): string {
    if (typeof value === 'boolean') {
        if (value) {
            // TODO: Move to l10n
            return 'Да'
        }

        // TODO: Move to l10n
        return 'Нет'
    }

    return value === void 0 || value === null || value === '' ? '...' : value
}

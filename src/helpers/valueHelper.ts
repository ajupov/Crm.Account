export function getValueOrEmpty(value?: string | boolean): string {
    if (typeof value === 'boolean') {
        if (value) {
            return 'Да'
        }

        return 'Нет'
    }

    return value ?? '...'
}

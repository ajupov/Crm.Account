export function toLocaleDateTime(value: string | Date | undefined): string {
    if (!value) {
        return ''
    }

    if (typeof value === 'string') {
        const date = new Date(value)

        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    }

    return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`
}

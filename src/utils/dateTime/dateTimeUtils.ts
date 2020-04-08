export function toLocaleDateTime(value: string): string {
    if (!value) {
        return ''
    }

    const date = new Date(value)

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}

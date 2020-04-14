export function toBoolean(value: string | number | undefined): boolean {
    return value === 'true'
}

export function toBooleanNullable(value: string | number | undefined): boolean | undefined {
    return value === void 0 ? void 0 : toBoolean(value)
}

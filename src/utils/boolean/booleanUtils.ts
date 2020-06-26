export function toBoolean(value: any): boolean {
    return value === 'true'
}

export function toBooleanNullable(value: any): boolean | undefined {
    return value === void 0 ? void 0 : toBoolean(value)
}

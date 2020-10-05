export function toBoolean(value: string | number): boolean {
    return value === 'true'
}

export function toBooleanNullable(value?: string | number): boolean | undefined {
    return value === void 0 ? void 0 : toBoolean(value)
}

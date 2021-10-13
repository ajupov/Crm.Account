export function toYesNo(value?: boolean): string {
    return value === void 0 ? '' : value === true ? 'Да' : 'Нет'
}

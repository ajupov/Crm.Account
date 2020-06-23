export function getWithCurrency(value?: number): string {
    const currencySymbol = '₽'
    const decimalPlaces = 2

    return value ? `${value.toFixed(decimalPlaces)} ${currencySymbol}` : ''
}

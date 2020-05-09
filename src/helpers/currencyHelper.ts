export function getWithCurrency(value: number): string {
    const currencySymbol = '₽'
    const decimalPlaces = 2

    return `${value.toFixed(decimalPlaces)} ${currencySymbol}`
}

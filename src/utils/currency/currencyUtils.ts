const CountryCodes = {
    RU: 643
}

const CurrencySettings = [
    {
        CountryCode: CountryCodes.RU,
        Symbol: '₽',
        DecimalPlaces: 2
    }
]

export function toCurrency(value?: number, countryCode = CountryCodes.RU): string {
    const setting = CurrencySettings.find(x => x.CountryCode === countryCode)

    return value ? `${value.toFixed(setting?.DecimalPlaces)} ${setting?.Symbol}` : ''
}

const slash = '/'

const trim = (value: string, symbol: string): string => {
    if (symbol === ']') {
        symbol = '\\]'
    }

    if (symbol === '\\') {
        symbol = '\\\\'
    }

    return value.replace(new RegExp('^[' + symbol + ']+|[' + symbol + ']+$', 'g'), '')
}

export const UriCombine = (host: string, resource: string, action?: string): string =>
    `${trim(host, slash)}/${trim(resource, slash)}/${trim(action ?? '', slash)}`

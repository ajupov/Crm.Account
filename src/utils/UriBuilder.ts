const slash = '/'

export const UriCombine = (host: string, resource: string, action?: string) =>
    `${trim(host, slash)}/${trim(resource, slash)}/${trim(action, slash)}`

const trim = (value: string, symbol: string)=> {
    if (symbol === ']') {
        symbol = '\\]'
    }

    if (symbol === '\\') {
        symbol = '\\\\'
    }

    return value.replace(new RegExp('^[' + symbol + ']+|[' + symbol + ']+$', 'g'), '')
}

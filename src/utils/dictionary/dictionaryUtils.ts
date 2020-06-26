export type Dictionary<T> = {
    [key in string | number]: T
}

export function arrayToDictionary<T>(values: (string | number)[]): Dictionary<T> {
    return values.reduce((map: any, obj) => {
        map[obj] = ''

        return map
    }, {})
}

export function dictionaryToArray<T>(values: Dictionary<T>): (string | number)[] {
    return Object.entries(values).map((x: any) => x[0])
}

type WithCreateDateTime = {
    createDateTime?: string
}

export function mergeAndSort(first: WithCreateDateTime[], second: WithCreateDateTime[] = []): WithCreateDateTime[] {
    return [...new Set([...first, ...second])]
        .map(x => (x.createDateTime ? { key: new Date(x.createDateTime).getTime(), value: x } : null))
        .sort((x, y) => x!.key - y!.key)
        .flatMap(x => x!.value)
}

export function getMaxCreateDateTime(comments: WithCreateDateTime[]): string | undefined {
    if (!comments || !comments.length) {
        return void 0
    }

    return comments.reduce((x, y) =>
        new Date(x.createDateTime!).getTime() > new Date(y.createDateTime!).getTime() ? x : y
    ).createDateTime
}

export function getMinCreateDateTime(comments: WithCreateDateTime[]): string | undefined {
    if (!comments || !comments.length) {
        return void 0
    }

    return comments.reduce((x, y) =>
        new Date(x.createDateTime!).getTime() < new Date(y.createDateTime!).getTime() ? x : y
    ).createDateTime
}

export function combineUrl(host?: string, path?: string): string {
    if (!host) {
        throw new Error('host is not defined')
    }

    return new URL(path || '', host).href.replace(/\/$/, '')
}

export function calculateOffset(page: number, limit: number): number {
    return (page - 1) * limit
}

export function calculatePage(offset: number, limit: number): number {
    return offset / limit + 1
}

export const DefaultLimit = 10

export type OrderBy = 'asc' | 'desc' | undefined

export default interface TableData {
    limit: number
    total: number
    lastModifyDateTime: string
    onChangePage: (page: number) => void
    sortBy?: string
    setSortBy: (value: string) => void
    orderBy?: OrderBy
    setOrderBy: (value: OrderBy) => void
}

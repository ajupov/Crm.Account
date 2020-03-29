export const DefaultLimit = 10

export default interface TableData {
    limit: number
    total: number
    lastModifyDateTime: string
    onChangePage: (page: number) => void
}

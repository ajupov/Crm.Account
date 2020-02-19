export default interface TableData<T> {
    totalCount: number
    lastModifyDateTime: string
    rows: T[]
}

export default interface TableData<T> {
    isLoading: boolean
    totalCount: number
    lastModifyDateTime: string
    rows: T[]
}

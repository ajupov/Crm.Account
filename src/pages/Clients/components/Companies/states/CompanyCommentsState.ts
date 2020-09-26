import CompanyComment from '../../../../../../api/companies/models/CompanyComment'
import CompanyCommentGetPagedListRequest from '../../../../../../api/companies/models/CompanyCommentGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CompanyCommentsState {
    request: CompanyCommentGetPagedListRequest
    setRequest: (request: CompanyCommentGetPagedListRequest) => void
    isNeedLoadingBefore: boolean
    setIsNeedLoadingBefore: (value: boolean) => void
    isNeedLoadingAfter: boolean
    setIsNeedLoadingAfter: (value: boolean) => void
    isLoading: boolean
    comments: CompanyComment[]
    hasCommentsBefore: boolean
    getPagedList: () => Promise<void>
    getNext: () => Promise<void>
    getPrevious: () => Promise<void>
}

export const companyCommentsInitialState: CompanyCommentsState = {
    request: {
        companyId: '',
        beforeCreateDateTime: void 0,
        afterCreateDateTime: void 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CompanyCommentGetPagedListRequest) => void 0,
    isNeedLoadingBefore: false,
    setIsNeedLoadingBefore: (_: boolean) => void 0,
    isNeedLoadingAfter: false,
    setIsNeedLoadingAfter: (_: boolean) => void 0,
    isLoading: false,
    comments: [],
    hasCommentsBefore: false,
    getPagedList: () => Promise.resolve(void 0),
    getNext: () => Promise.resolve(void 0),
    getPrevious: () => Promise.resolve(void 0)
}

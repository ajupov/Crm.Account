/* eslint-disable */

import DealAttributeChange from '../models/DealAttributeChange'

export default interface DealAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: DealAttributeChange[]
}

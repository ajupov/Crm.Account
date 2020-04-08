/* eslint-disable */

import CompanyType from '../models/CompanyType'
import CompanyIndustryType from '../models/CompanyIndustryType'

export default interface CompanyGetPagedListRequest {
    leadId?: string
    fullName?: string
    shortName?: string
    phone?: string
    email?: string
    taxNumber?: string
    registrationNumber?: string
    minRegistrationDate?: string
    maxRegistrationDate?: string
    minEmployeesCount?: number
    maxEmployeesCount?: number
    minYearlyTurnover?: number
    maxYearlyTurnover?: number
    juridicalPostcode?: string
    juridicalCountry?: string
    juridicalRegion?: string
    juridicalProvince?: string
    juridicalCity?: string
    juridicalStreet?: string
    juridicalHouse?: string
    juridicalApartment?: string
    legalPostcode?: string
    legalCountry?: string
    legalRegion?: string
    legalProvince?: string
    legalCity?: string
    legalStreet?: string
    legalHouse?: string
    legalApartment?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    types?: CompanyType[]
    industryTypes?: CompanyIndustryType[]
    allAttributes?: boolean
    attributes?: string[]
    bankAccountNumber?: string
    bankAccountBankNumber?: string
    bankAccountBankCorrespondentNumber?: string
    bankAccountBankName?: string
    createUserIds?: string[]
    responsibleUserIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}

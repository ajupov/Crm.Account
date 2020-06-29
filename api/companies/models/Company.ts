import CompanyAttributeLink from '../models/CompanyAttributeLink'
import CompanyBankAccount from '../models/CompanyBankAccount'
import CompanyIndustryType from '../models/CompanyIndustryType'
import CompanyType from '../models/CompanyType'

export default interface Company {
    id?: string
    accountId?: string
    leadId?: string
    createUserId?: string
    responsibleUserId?: string
    type: CompanyType
    industryType: CompanyIndustryType
    fullName?: string
    shortName?: string
    phone?: string
    email?: string
    taxNumber?: string
    registrationNumber?: string
    registrationDate?: string
    employeesCount: number
    yearlyTurnover: number
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
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    bankAccounts?: CompanyBankAccount[]
    attributeLinks?: CompanyAttributeLink[]
}

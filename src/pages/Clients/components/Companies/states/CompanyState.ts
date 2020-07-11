import Company from '../../../../../../api/companies/models/Company'
import CompanyAttribute from '../../../../../../api/companies/models/CompanyAttribute'
import CompanyIndustryType from '../../../../../../api/companies/models/CompanyIndustryType'
import CompanyType from '../../../../../../api/companies/models/CompanyType'

export interface CompanyState {
    isLoading: boolean
    company: Company
    attributes: CompanyAttribute[]
    setCompany: (company: Company) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const companyInitialState: CompanyState = {
    isLoading: false,
    company: {
        id: void 0,
        accountId: void 0,
        leadId: void 0,
        createUserId: void 0,
        responsibleUserId: void 0,
        type: CompanyType.Commercial,
        industryType: CompanyIndustryType.Other,
        fullName: void 0,
        shortName: void 0,
        phone: void 0,
        email: void 0,
        taxNumber: void 0,
        registrationNumber: void 0,
        registrationDate: void 0,
        employeesCount: 0,
        yearlyTurnover: 0,
        juridicalPostcode: void 0,
        juridicalCountry: void 0,
        juridicalRegion: void 0,
        juridicalProvince: void 0,
        juridicalCity: void 0,
        juridicalStreet: void 0,
        juridicalHouse: void 0,
        juridicalApartment: void 0,
        legalPostcode: void 0,
        legalCountry: void 0,
        legalRegion: void 0,
        legalProvince: void 0,
        legalCity: void 0,
        legalStreet: void 0,
        legalHouse: void 0,
        legalApartment: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        bankAccounts: [],
        attributeLinks: []
    },
    attributes: [],
    setCompany: (_: Company) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}

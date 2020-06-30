import { useCallback, useEffect, useState } from 'react'

import CompaniesClient from '../../../../../../api/companies/clients/CompaniesClient'
import Company from '../../../../../../api/companies/models/Company'
import ContactAttribute from '../../../../../../api/contacts/models/ContactAttribute'
import ContactAttributesClient from '../../../../../../api/contacts/clients/ContactAttributesClient'
import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Lead from '../../../../../../api/leads/models/Lead'
import LeadsClient from '../../../../../../api/leads/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)
const companiesClient = new CompaniesClient(HttpClientFactoryInstance.Api)
const contactAttributesClient = new ContactAttributesClient(HttpClientFactoryInstance.Api)

interface UseContactsSelectOptionsReturn {
    getActualLeads: () => DropdownItemProps[]
    getAllLeads: () => DropdownItemProps[]
    getActualCompanies: () => DropdownItemProps[]
    getAllCompanies: () => DropdownItemProps[]
    getActualAttributes: () => DropdownItemProps[]
    getAllAttributes: () => DropdownItemProps[]
}

// TODO: Move to l10n
const useContactsSelectOptions = (): UseContactsSelectOptionsReturn => {
    const MaxLimit = 1000

    const [leads, setLeads] = useState<Lead[]>([])
    const [companies, setCompanies] = useState<Company[]>([])
    const [attributes, setAttributes] = useState<ContactAttribute[]>([])

    const mapLead = useCallback((x: Lead) => ({ value: x.id ?? '', text: x.name ?? '' }), [])

    const mapCompany = useCallback((x: Company) => ({ value: x.id ?? '', text: x.shortName ?? '' }), [])

    const mapContactAttribute = useCallback((x: ContactAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const getLeads = useCallback(async () => {
        const response = await leadsClient.GetPagedListAsync({
            sortBy: 'Name',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setLeads(response.leads ?? [])
    }, [])

    const getCompanies = useCallback(async () => {
        const response = await companiesClient.GetPagedListAsync({
            sortBy: 'ShortName',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setCompanies(response.companies ?? [])
    }, [])

    const getAttributes = useCallback(async () => {
        const response = await contactAttributesClient.GetPagedListAsync({
            isDeleted: false,
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(response.attributes ?? [])
    }, [])

    const getActualLeads = useCallback(
        () => [{ value: '', text: 'Не выбрано' }, ...leads.filter(x => !x.isDeleted).map(mapLead)],
        [leads, mapLead]
    )

    const getAllLeads = useCallback(() => leads.map(mapLead), [leads, mapLead])

    const getActualCompanies = useCallback(
        () => [{ value: '', text: 'Не выбрано' }, ...companies.filter(x => !x.isDeleted).map(mapCompany)],
        [companies, mapCompany]
    )

    const getAllCompanies = useCallback(() => companies.map(mapCompany), [companies, mapCompany])

    const getActualAttributes = useCallback(() => attributes.filter(x => !x.isDeleted).map(mapContactAttribute), [
        attributes,
        mapContactAttribute
    ])

    const getAllAttributes = useCallback(() => attributes.map(mapContactAttribute), [attributes, mapContactAttribute])

    useEffect(() => {
        getLeads()
        getCompanies()
        getAttributes()
    }, [getAttributes, getCompanies, getLeads])

    return {
        getActualLeads,
        getAllLeads,
        getActualCompanies,
        getAllCompanies,
        getActualAttributes,
        getAllAttributes
    }
}

export default useContactsSelectOptions

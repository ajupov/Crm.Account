import { CompanyState, companyInitialState } from '../../../states/CompanyState'
import { useCallback, useEffect, useState } from 'react'

import CompaniesClient from '../../../../../../../../api/companies/clients/CompaniesClient'
import CompanyAttributesClient from '../../../../../../../../api/companies/clients/CompanyAttributesClient'
import HttpClientFactory from '../../../../../../../utils/httpClientFactory/HttpClientFactory'
import { companyAttributesInitialState } from '../../../../CompanyAttributes/states/CompanyAttributesState'
import { useParams } from 'react-router'

const companiesClient = new CompaniesClient(HttpClientFactory.Api)
const companyAttributesClient = new CompanyAttributesClient(HttpClientFactory.Api)

const useCompany = (): CompanyState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(companyInitialState.isLoading)
    const [company, setCompany] = useState(companyInitialState.company)
    const [attributes, setAttributes] = useState(companyAttributesInitialState.attributes)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await companiesClient.GetAsync(id)

        setCompany(response)

        if (response.attributeLinks && response.attributeLinks.length > 0) {
            const ids = response.attributeLinks.map(x => x.companyAttributeId).filter(x => x) as string[]

            const attributes = await companyAttributesClient.GetListAsync(ids)

            setAttributes(attributes)
        }

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await companiesClient.CreateAsync(company)

        setIsLoading(false)
    }, [company])

    const update = useCallback(async () => {
        setIsLoading(true)

        await companiesClient.UpdateAsync(company)

        setIsLoading(false)
    }, [company])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, company, setCompany, attributes, create, update }
}

export default useCompany

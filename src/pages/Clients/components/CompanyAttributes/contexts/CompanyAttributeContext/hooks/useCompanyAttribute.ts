import { CompanyAttributeState, companyAttributeInitialState } from '../../../states/CompanyAttributeState'
import { useCallback, useEffect, useState } from 'react'

import CompanyAttributesClient from '../../../../../../../../api/companies/clients/CompanyAttributesClient'
import HttpClientFactoryInstance from '../../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import { useParams } from 'react-router'

const companyAttributesClient = new CompanyAttributesClient(HttpClientFactoryInstance.Api)

const useCompanyAttribute = (): CompanyAttributeState => {
    const { id }: { id: string } = useParams()
    const [isLoading, setIsLoading] = useState(companyAttributeInitialState.isLoading)
    const [attribute, setAttribute] = useState(companyAttributeInitialState.attribute)

    const get = useCallback(async () => {
        if (!id) {
            return
        }

        setIsLoading(true)

        const response = await companyAttributesClient.GetAsync(id)

        setAttribute(response)

        setIsLoading(false)
    }, [id])

    const create = useCallback(async () => {
        setIsLoading(true)

        await companyAttributesClient.CreateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    const update = useCallback(async () => {
        setIsLoading(true)

        await companyAttributesClient.UpdateAsync(attribute)

        setIsLoading(false)
    }, [attribute])

    useEffect(() => {
        void get()
    }, [get])

    return { isLoading, attribute, setAttribute, create, update }
}

export default useCompanyAttribute

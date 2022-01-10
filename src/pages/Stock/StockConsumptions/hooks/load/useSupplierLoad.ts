import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Supplier from '../../../../../../api/suppliers/models/Supplier'
import SuppliersClient from '../../../../../../api/suppliers/clients/SuppliersClient'

const suppliersClient = new SuppliersClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseSupplierLoadReturn {
    supplier?: Supplier
}

const useSupplierLoad = (id?: string): UseSupplierLoadReturn => {
    const [supplier, setSupplier] = useState<Supplier>()

    const loadSupplier = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await suppliersClient.GetAsync(id)

        setSupplier(response)
    }, [id])

    useEffect(() => {
        void loadSupplier()
    }, [loadSupplier])

    return { supplier }
}

export default useSupplierLoad

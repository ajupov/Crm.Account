import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import SupplierAttribute from '../../../../../../api/suppliers/models/SupplierAttribute'
import SupplierAttributesClient from '../../../../../../api/suppliers/clients/SupplierAttributesClient'

const supplierAttributesClient = new SupplierAttributesClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseSupplierAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useSupplierAttributesLoad = (): UseSupplierAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<SupplierAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await supplierAttributesClient.GetPagedListAsync({
            sortBy: 'Key',
            orderBy: 'asc',
            offset: 0,
            limit: MaxLimit
        })

        setAttributes(response.attributes ?? [])
    }, [])

    useEffect(() => {
        void loadAttributes()
    }, [loadAttributes])

    const map = useCallback((x: SupplierAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useSupplierAttributesLoad

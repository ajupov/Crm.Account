import { useCallback, useMemo, useState } from 'react'

import { DropdownItemProps } from '../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../utils/httpClientFactory/HttpClientFactory'
import Supplier from '../../../../../../api/suppliers/models/Supplier'
import SuppliersClient from '../../../../../../api/suppliers/clients/SuppliersClient'

const suppliersClient = new SuppliersClient(HttpClientFactory.Host, HttpClientFactory.Api)

interface UseSuppliersAutocompleteReturn {
    loadSuppliers: (value?: string) => Promise<void>
    suppliersAsOptions: DropdownItemProps[]
}

const useSuppliersAutocomplete = (): UseSuppliersAutocompleteReturn => {
    const MaxLimit = 10

    const [suppliers, setSuppliers] = useState<Supplier[]>([])

    const loadSuppliers = useCallback(async (value?: string) => {
        const response = await suppliersClient.GetPagedListAsync({
            name: value,
            sortBy: 'Name',
            orderBy: 'asc',
            isDeleted: false,
            offset: 0,
            limit: MaxLimit
        })

        setSuppliers(response.suppliers ?? [])
    }, [])

    const mapSupplierText = useCallback((supplier: Supplier) => (supplier.name ? `${supplier.name} ` : '').trim(), [])

    const map = useCallback((x: Supplier) => ({ value: x.id ?? '', text: mapSupplierText(x) }), [mapSupplierText])

    const suppliersAsOptions = useMemo(() => suppliers.map(map), [map, suppliers])

    return { loadSuppliers, suppliersAsOptions }
}

export default useSuppliersAutocomplete

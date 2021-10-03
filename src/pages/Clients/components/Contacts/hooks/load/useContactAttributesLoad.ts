import { useCallback, useEffect, useMemo, useState } from 'react'

import ContactAttribute from '../../../../../../../api/contacts/models/ContactAttribute'
import ContactAttributesClient from '../../../../../../../api/contacts/clients/ContactAttributesClient'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'
import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'

const contactAttributesClient = new ContactAttributesClient(HttpClientFactory.Api)

interface UseContactAttributesLoadReturn {
    attributesAsOptions: DropdownItemProps[]
}

const useContactAttributesLoad = (): UseContactAttributesLoadReturn => {
    const MaxLimit = 2147483647

    const [attributes, setAttributes] = useState<ContactAttribute[]>([])

    const loadAttributes = useCallback(async () => {
        const response = await contactAttributesClient.GetPagedListAsync({
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

    const map = useCallback((x: ContactAttribute) => ({ value: x.id ?? '', text: x.key ?? '' }), [])

    const attributesAsOptions = useMemo(() => attributes.filter(x => !x.isDeleted).map(map), [attributes, map])

    return { attributesAsOptions }
}

export default useContactAttributesLoad

import { useCallback, useEffect, useState } from 'react'

import HttpClientFactory from '../../../../../../utils/httpClientFactory/HttpClientFactory'
import Lead from '../../../../../../../api/customers/models/Lead'
import LeadsClient from '../../../../../../../api/customers/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactory.Api)

interface UseLeadLoadReturn {
    lead?: Lead
}

const useLeadLoad = (id?: string): UseLeadLoadReturn => {
    const [lead, setLead] = useState<Lead>()

    const loadLead = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await leadsClient.GetAsync(id)

        setLead(response)
    }, [id])

    useEffect(() => {
        void loadLead()
    }, [loadLead])

    return { lead }
}

export default useLeadLoad

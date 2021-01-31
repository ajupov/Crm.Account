import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Lead from '../../../../../../../api/leads/models/Lead'
import LeadsClient from '../../../../../../../api/leads/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)

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

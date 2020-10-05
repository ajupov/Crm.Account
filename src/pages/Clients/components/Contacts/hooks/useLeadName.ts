import { useCallback, useEffect, useState } from 'react'

import HttpClientFactoryInstance from '../../../../../utils/httpClientFactory/HttpClientFactoryInstance'
import Lead from '../../../../../../api/leads/models/Lead'
import LeadsClient from '../../../../../../api/leads/clients/LeadsClient'

const leadsClient = new LeadsClient(HttpClientFactoryInstance.Api)

interface UseLeadNameReturn {
    getLeadName: () => string
}

// TODO: Move to l10n
const useLeadName = (id?: string): UseLeadNameReturn => {
    const [lead, setLead] = useState<Lead>()

    const getLead = useCallback(async () => {
        if (!id) {
            return
        }

        const response = await leadsClient.GetAsync(id)

        setLead(response)
    }, [id])

    const getLeadName = useCallback(
        () => `${lead?.surname ?? ''} ${lead?.name ?? ''} ${lead?.patronymic ?? ''}`.trim(),
        [lead]
    )

    useEffect(() => {
        void getLead()
    }, [getLead])

    return { getLeadName }
}

export default useLeadName

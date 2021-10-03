import { useCallback, useContext } from 'react'

import Lead from '../../../../../../../../api/customers/models/Lead'
import LeadContext from '../../../contexts/LeadContext/LeadContext'
import LeadsActionsContext from '../../../contexts/LeadsActionsContext/LeadsActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/leadAttributesMapper'
import { useHistory } from 'react-router'

interface UseLeadViewReturn {
    map: (lead: Lead) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useLeadView = (): UseLeadViewReturn => {
    const history = useHistory()
    const leadState = useContext(LeadContext)
    const actionsState = useContext(LeadsActionsContext)

    const onClickDelete = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsDeleting(true)
        },
        [actionsState]
    )

    const onClickRestore = useCallback(
        (id: string) => {
            actionsState.setIds([id])
            actionsState.setIsRestoring(true)
        },
        [actionsState]
    )

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapAttributes = useCallback(
        () => joinAttributes(leadState.lead.attributeLinks),
        [leadState.lead.attributeLinks]
    )

    const map = useCallback(
        (lead: Lead): ViewDataProps[] => [
            { label: 'Источник', value: lead.source ? lead.source.name : '' },
            { label: 'Фамилия', value: lead.surname },
            { label: 'Имя', value: lead.name },
            { label: 'Отчество', value: lead.patronymic },
            { label: 'Телефон', value: lead.phone },
            { label: 'Email', value: lead.email },
            { label: 'Должность', value: lead.post },
            { label: 'Почтовый индекс', value: lead.postcode },
            { label: 'Страна', value: lead.country },
            { label: 'Регион', value: lead.region },
            { label: 'Район/провинция', value: lead.province },
            { label: 'Город/населенный пункт', value: lead.city },
            { label: 'Улица', value: lead.street },
            { label: 'Дом/строение', value: lead.house },
            { label: 'Квартира', value: lead.apartment },
            { label: 'Сумма потенциальной сделки', value: lead.opportunitySum.toString() },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: lead.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapAttributes]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useLeadView

import { useCallback, useContext } from 'react'

import Customer from '../../../../../../../../api/customers/models/Customer'
import CustomerContext from '../../../contexts/CustomerContext/CustomerContext'
import CustomersActionsContext from '../../../contexts/CustomersActionsContext/CustomersActionsContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/customerAttributesMapper'
import { useHistory } from 'react-router'

interface UseCustomerViewReturn {
    map: (customer: Customer) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCustomerView = (): UseCustomerViewReturn => {
    const history = useHistory()
    const customerState = useContext(CustomerContext)
    const actionsState = useContext(CustomersActionsContext)

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
        () => joinAttributes(customerState.customer.attributeLinks),
        [customerState.customer.attributeLinks]
    )

    const map = useCallback(
        (customer: Customer): ViewDataProps[] => [
            { label: 'Источник', value: customer.source ? customer.source.name : '' },
            { label: 'Фамилия', value: customer.surname },
            { label: 'Имя', value: customer.name },
            { label: 'Отчество', value: customer.patronymic },
            { label: 'Телефон', value: customer.phone },
            { label: 'Email', value: customer.email },
            { label: 'Должность', value: customer.post },
            { label: 'Почтовый индекс', value: customer.postcode },
            { label: 'Страна', value: customer.country },
            { label: 'Регион', value: customer.region },
            { label: 'Район/провинция', value: customer.province },
            { label: 'Город/населенный пункт', value: customer.city },
            { label: 'Улица', value: customer.street },
            { label: 'Дом/строение', value: customer.house },
            { label: 'Квартира', value: customer.apartment },
            { label: 'Сумма потенциальной сделки', value: customer.opportunitySum.toString() },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: customer.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapAttributes]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useCustomerView

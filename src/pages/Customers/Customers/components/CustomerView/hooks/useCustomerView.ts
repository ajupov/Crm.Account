import { useCallback, useContext } from 'react'

import Customer from '../../../../../../../api/customers/models/Customer'
import CustomerContext from '../../../contexts/CustomerContext/CustomerContext'
import CustomersActionsContext from '../../../contexts/CustomersActionsContext/CustomersActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/leadAttributesMapper'
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
            { label: 'Дата рождения', value: customer.birthDate },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: customer.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapAttributes]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useCustomerView

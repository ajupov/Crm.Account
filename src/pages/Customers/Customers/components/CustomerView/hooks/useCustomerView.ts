import { useCallback, useContext } from 'react'

import Customer from '../../../../../../../api/customers/models/Customer'
import CustomerContext from '../../../contexts/CustomerContext/CustomerContext'
import CustomersActionsContext from '../../../contexts/CustomersActionsContext/CustomersActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/customerAttributesMapper'
import { toDate } from '../../../../../../utils/dateTime/dateTimeUtils'
import useCustomerAttributesLoad from '../../../hooks/load/useCustomerAttributesLoad'
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
    const { attributesAsOptions } = useCustomerAttributesLoad()

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
        () => joinAttributes(customerState.customer.attributeLinks, attributesAsOptions),
        [attributesAsOptions, customerState.customer.attributeLinks]
    )

    const map = useCallback(
        (customer: Customer): ViewDataProps[] => [
            { label: 'Источник', value: customer.source?.name ?? '' },
            { label: 'Фамилия', value: customer.surname },
            { label: 'Имя', value: customer.name },
            { label: 'Отчество', value: customer.patronymic },
            { label: 'Телефон', value: customer.phone },
            { label: 'Email', value: customer.email },
            { label: 'Дата рождения', value: toDate(customer.birthDate) },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: customer.isDeleted ? 'Да' : 'Нет' }
        ],
        [mapAttributes]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useCustomerView

import { useCallback, useContext } from 'react'

import Customer from '../../../../../../../api/customers/models/Customer'
import Order from '../../../../../../../api/orders/models/Order'
import OrderContext from '../../../contexts/OrderContext/OrderContext'
import OrdersActionsContext from '../../../contexts/OrdersActionsContext/OrdersActionsContext'
import { ViewDataProps } from '../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/orderAttributesMapper'
import { joinItems } from '../../../mappers/orderItemsMapper'
import { toLocaleDate } from '../../../../../../utils/dateTime/dateTimeUtils'
import useCustomerLoad from '../../../hooks/load/useCustomerLoad'
import { useHistory } from 'react-router'
import useOrderAttributesLoad from '../../../hooks/load/useOrderAttributesLoad'

interface UseOrderViewReturn {
    map: (order: Order) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useOrderView = (): UseOrderViewReturn => {
    const history = useHistory()
    const orderState = useContext(OrderContext)
    const actionsState = useContext(OrdersActionsContext)
    const { customer } = useCustomerLoad(orderState.order.customerId)
    const { attributesAsOptions } = useOrderAttributesLoad()

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
        () => joinAttributes(orderState.order.attributeLinks, attributesAsOptions),
        [attributesAsOptions, orderState.order.attributeLinks]
    )

    const mapItems = useCallback(() => joinItems(orderState.order.items), [orderState.order.items])

    const mapCustomerText = useCallback(
        (customer?: Customer) =>
            customer
                ? (
                      (customer.surname ? `${customer.surname} ` : '') +
                      (customer.name ? `${customer.name} ` : '') +
                      (customer.patronymic ? `${customer.patronymic} ` : '') +
                      (customer.phone ? ` (${customer.phone})` : '')
                  ).trim()
                : '',
        []
    )

    const map = useCallback(
        (order: Order): ViewDataProps[] => [
            { label: 'Тип', value: order.type?.name ?? '' },
            { label: 'Статус', value: order.status?.name ?? '' },
            { label: 'Клиент', value: mapCustomerText(customer) },
            { label: 'Имя', value: order.name },
            { label: 'Дата начала', value: toLocaleDate(order.startDateTime) },
            { label: 'Дата окончания', value: toLocaleDate(order.endDateTime) },
            { label: 'Позиции', value: mapItems() },
            { label: 'Сумма', value: order.sum.toString() },
            { label: 'Сумма без скидки', value: order.sumWithoutDiscount.toString() },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: order.isDeleted ? 'Да' : 'Нет' }
        ],
        [customer, mapAttributes, mapCustomerText, mapItems]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useOrderView

import { addUtcKind, getDateTimeAsRecently, toLocaleDate } from '../../../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Order from '../../../../../../../../../api/orders/models/Order'
import OrderAttributeLink from '../../../../../../../../../api/orders/models/OrderAttributeLink'
import OrderChange from '../../../../../../../../../api/orders/models/OrderChange'
import OrderChangesContext from '../../../../../contexts/OrderChangesContext/OrderChangesContext'
import OrderItem from '../../../../../../../../../api/orders/models/OrderItem'
import { TableBodyRowProps } from '../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../helpers/entityFieldValueHelper'
import { joinAttributes } from '../../../../../mappers/orderAttributesMapper'
import { joinItems } from '../../../../../mappers/orderItemsMapper'
import useOrderAttributesLoad from '../../../../../hooks/load/useOrderAttributesLoad'

interface UseOrderChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (orders: OrderChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useOrderChangesTable = (): UseOrderChangesTableReturn => {
    const state = useContext(OrderChangesContext)
    const { attributesAsOptions } = useOrderAttributesLoad()

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений клиента')
        const headers = ['Идентификатор', 'Идентификатор клиента', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: OrderChange) => {
        if (!change.oldValueJson && change.newValueJson) {
            return 'Создан'
        }

        if (change.oldValueJson && change.newValueJson) {
            return 'Изменен'
        }

        if (change.oldValueJson && !change.newValueJson) {
            return 'Удален'
        }

        return ''
    }, [])

    const mapAttributes = useCallback(
        (links?: OrderAttributeLink[]) => joinAttributes(links, attributesAsOptions),
        [attributesAsOptions]
    )

    const mapItems = useCallback(
        (items?: OrderItem[]) =>
            joinItems(items?.sort((x, y) => ((x.productName ?? '') > (y.productName ?? '') ? 1 : 0))).join(', '),
        []
    )

    const getChangeValue = useCallback(
        (change: OrderChange) => {
            const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as Order) : void 0
            const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as Order) : void 0

            return [
                `Тип: ${getValueOrEmpty(oldValue?.type?.name)} → ${getValueOrEmpty(newValue?.type?.name)}`,
                `Статус: ${getValueOrEmpty(oldValue?.status?.name)} → ${getValueOrEmpty(newValue?.status?.name)}`,
                `Имя: ${getValueOrEmpty(oldValue?.name)} → ${getValueOrEmpty(newValue?.name)}`,
                `ID клиента: ${getValueOrEmpty(oldValue?.customerId)} → ${getValueOrEmpty(newValue?.customerId)}`,
                `Дата начала: ${getValueOrEmpty(toLocaleDate(oldValue?.startDateTime))} → ${getValueOrEmpty(
                    toLocaleDate(newValue?.startDateTime)
                )}`,
                `Дата окончания: ${getValueOrEmpty(toLocaleDate(oldValue?.endDateTime))} → ${getValueOrEmpty(
                    toLocaleDate(newValue?.endDateTime)
                )}`,
                `Позиции: ${getValueOrEmpty(mapItems(oldValue?.items))} → ${getValueOrEmpty(
                    mapItems(newValue?.items)
                )}`,
                `Сумма: ${getValueOrEmpty(oldValue?.sum)} → ${getValueOrEmpty(newValue?.sum)}`,
                `Сумма без скидки: ${getValueOrEmpty(oldValue?.sum)} → ${getValueOrEmpty(newValue?.sum)}`,
                `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`,
                `Атрибуты: ${getValueOrEmpty(mapAttributes(oldValue?.attributeLinks))} → ${getValueOrEmpty(
                    mapAttributes(newValue?.attributeLinks)
                )}`
            ]
        },
        [mapAttributes, mapItems]
    )

    const map = useCallback(
        (changes: OrderChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            {
                                value: change.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(change.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ]
                    } as TableBodyRowProps)
            ),
        [getChangeName, getChangeValue]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Action',
                label: 'Действие',
                width: 3
            },
            {
                key: 'Changes',
                label: 'Изменения',
                width: 10
            },
            {
                key: 'CreateDateTime',
                label: 'Дата и время',
                width: 3
            }
        ],
        []
    )

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useOrderChangesTable

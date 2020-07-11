import { calculateOffset, calculatePage } from '../../../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import CompanyAttribute from '../../../../../../../../../../api/companies/models/CompanyAttribute'
import CompanyAttributeChange from '../../../../../../../../../../api/companies/models/CompanyAttributeChange'
import CompanyAttributeChangesContext from '../../../../../contexts/CompanyAttributeChangesContext/CompanyAttributeChangesContext'
import { TableBodyRowProps } from '../../../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../../../components/common/collections/Table/TableHeader'
import { getAttributeTypeName } from '../../../../../../../../../helpers/entityAttributeTypeHelper'
import { getFileNameWithDateTime } from '../../../../../../../../../helpers/fileNameHelper'
import { getValueOrEmpty } from '../../../../../../../../../helpers/entityFieldValueHelper'
import { toLocaleDateTime } from '../../../../../../../../../utils/dateTime/dateTimeUtils'

interface UseCompanyAttributeChangesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (attributes: CompanyAttributeChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCompanyAttributeChangesTable = (): UseCompanyAttributeChangesTableReturn => {
    const state = useContext(CompanyAttributeChangesContext)

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = getFileNameWithDateTime('История изменений атрибутов контакта')
        const headers = ['Идентификатор', 'Идентификатор атрибута', 'Дата и время', 'Старое значение', 'Новое значение']
        const csv = convertObjectToCSV([headers, ...changes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const getChangeName = useCallback((change: CompanyAttributeChange) => {
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

    const getChangeValue = useCallback((change: CompanyAttributeChange) => {
        const oldValue = change.oldValueJson ? (JSON.parse(change.oldValueJson) as CompanyAttribute) : void 0
        const newValue = change.newValueJson ? (JSON.parse(change.newValueJson) as CompanyAttribute) : void 0

        return [
            `Тип: ${getValueOrEmpty(getAttributeTypeName(oldValue?.type))} → ${getValueOrEmpty(
                getAttributeTypeName(newValue?.type)
            )}`,
            `Наименование: ${getValueOrEmpty(oldValue?.key)} → ${getValueOrEmpty(newValue?.key)}`,
            `Удален: ${getValueOrEmpty(oldValue?.isDeleted)} → ${getValueOrEmpty(newValue?.isDeleted)}`
        ]
    }, [])

    const map = useCallback(
        (changes: CompanyAttributeChange[]) =>
            changes.map(
                change =>
                    ({
                        id: change.id,
                        cells: [
                            { value: getChangeName(change), textAlign: 'center' },
                            { value: getChangeValue(change), textAlign: 'left' },
                            { value: toLocaleDateTime(change.createDateTime), textAlign: 'center' }
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

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useCompanyAttributeChangesTable

import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Contact from '../../../../../../../../api/contacts/models/Contact'
import ContactsContext from '../../../contexts/ContactsContext/ContactsContext'
import ContactsRoutes from '../../../routes/ContactsRoutes'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getDateTimeAsRecently } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import useContactView from '../../ContactView/hooks/useContactView'
import { useHistory } from 'react-router'

interface UseContactsTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (contacts: Contact[]) => TableBodyRowProps[]
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useContactsTable = (): UseContactsTableReturn => {
    const history = useHistory()
    const state = useContext(ContactsContext)
    const { onClickEdit, onClickDelete, onClickRestore } = useContactView()

    const onClickCreate = useCallback(() => history.push(ContactsRoutes.Create), [history])

    const onClickView = useCallback((id: string) => history.push(`${ContactsRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const contacts = (await state.getAll())?.contacts
        if (!contacts) {
            return
        }

        const fileName = getFileNameWithDateTime('Контакты')
        const headers = [
            'Идентификатор',
            'Идентификатор лида',
            'Идентификатор компании',
            'Фамилия',
            'Имя',
            'Отчество',
            'Телефон',
            'Email',
            'ИНН',
            'Должность',
            'Почтовый индекс',
            'Страна',
            'Регион',
            'Район/провинция',
            'Город/населенный пункт',
            'Улица',
            'Дом/строение',
            'Квартира',
            'Дата рождения',
            'Удален',
            'Создан',
            'Изменен'
        ]
        const csv = convertObjectToCSV([headers, ...contacts])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickSort = useCallback(
        (columnName: string) => {
            if (state.request.sortBy !== columnName) {
                state.setRequest({ ...state.request, sortBy: columnName, orderBy: 'asc' })
            } else {
                state.setRequest({ ...state.request, orderBy: state.request.orderBy === 'asc' ? 'desc' : 'asc' })
            }
        },
        [state]
    )

    const getOrderBy = useCallback(
        (columnName: string) => {
            if (state.request.sortBy === columnName) {
                return state.request.orderBy
            }

            return void 0
        },
        [state.request.orderBy, state.request.sortBy]
    )

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const map = useCallback(
        (contacts: Contact[]) =>
            contacts.map(
                contact =>
                    ({
                        id: contact.id,
                        cells: [
                            { value: contact.surname, textAlign: 'left' },
                            { value: contact.name, textAlign: 'left' },
                            { value: contact.patronymic, textAlign: 'left' },
                            { value: contact.phone, textAlign: 'left' },
                            { value: contact.email, textAlign: 'left' },
                            {
                                value: contact.createDateTime
                                    ? getDateTimeAsRecently(new Date(contact.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: contact.isDeleted,
                        onClickRow: onClickView,
                        onClickEditButton: onClickEdit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickEdit, onClickRestore, onClickView]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Surname',
                label: 'Фамилия',
                width: 3,
                onClick: () => onClickSort('Surname'),
                orderBy: getOrderBy('Surname')
            },
            {
                key: 'Name',
                label: 'Имя',
                width: 3,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'Patronymic',
                label: 'Отчетство',
                width: 3,
                onClick: () => onClickSort('Patronymic'),
                orderBy: getOrderBy('Patronymic')
            },
            {
                key: 'Phone',
                label: 'Телефон',
                width: 2,
                onClick: () => onClickSort('Phone'),
                orderBy: getOrderBy('Phone')
            },
            {
                key: 'Email',
                label: 'Email',
                width: 2,
                onClick: () => onClickSort('Email'),
                orderBy: getOrderBy('Email')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 3,
                onClick: () => onClickSort('CreateDateTime'),
                orderBy: getOrderBy('CreateDateTime')
            }
        ],
        [getOrderBy, onClickSort]
    )

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage }
}

export default useContactsTable

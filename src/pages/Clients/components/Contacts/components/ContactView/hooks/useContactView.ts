import { useCallback, useContext } from 'react'

import Contact from '../../../../../../../../api/contacts/models/Contact'
import ContactContext from '../../../contexts/ContactContext/ContactContext'
import ContactsActionsContext from '../../../contexts/ContactsActionsContext/ContactsActionsContext'
import { ContactsRoutes } from '../../../routes/ContactsRoutes'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/contactAttributesMapper'
import { joinBankAccounts } from '../../../mappers/contactBankAccountsMapper'
import useContactsSelectOptions from '../../../hooks/useContactsSelectOptions'
import { useHistory } from 'react-router'

interface UseContactViewReturn {
    map: (contact: Contact) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useContactView = (): UseContactViewReturn => {
    const history = useHistory()
    const { getAllLeads, getAllCompanies } = useContactsSelectOptions()
    const contactState = useContext(ContactContext)
    const actionsState = useContext(ContactsActionsContext)

    const onClickEdit = useCallback((id: string) => history.push(`${ContactsRoutes.Edit}/${id}`), [history])

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

    const onClickHistory = useCallback((id: string) => history.push(`${ContactsRoutes.Changes}/${id}`), [history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapAttributes = useCallback(() => joinAttributes(contactState.contact.attributeLinks), [
        contactState.contact.attributeLinks
    ])

    const mapBankAccounts = useCallback(() => joinBankAccounts(contactState.contact.bankAccounts), [
        contactState.contact.bankAccounts
    ])

    const map = useCallback(
        (contact: Contact): ViewDataProps[] => [
            {
                label: 'Лид',
                value: getAllLeads().find(x => x.value === contact.leadId)?.text
            },
            {
                label: 'Компания',
                value: getAllCompanies().find(x => x.value === contact.companyId)?.text
            },
            { label: 'Фамилия', value: contact.surname },
            { label: 'Имя', value: contact.name },
            { label: 'Отчество', value: contact.patronymic },
            { label: 'Телефон', value: contact.phone },
            { label: 'Email', value: contact.email },
            { label: 'ИНН', value: contact.taxNumber },
            { label: 'Должность', value: contact.post },
            { label: 'Почтовый индекс', value: contact.postcode },
            { label: 'Страна', value: contact.country },
            { label: 'Регион', value: contact.region },
            { label: 'Район/провинция', value: contact.province },
            { label: 'Город/населенный пункт', value: contact.city },
            { label: 'Улица', value: contact.street },
            { label: 'Дом/строение', value: contact.house },
            { label: 'Квартира', value: contact.apartment },
            { label: 'Дата рождения', value: contact.birthDate },
            { label: 'Категории', value: mapBankAccounts() },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: contact.isDeleted ? 'Да' : 'Нет' }
        ],
        [getAllCompanies, getAllLeads, mapAttributes, mapBankAccounts]
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useContactView

import { useCallback, useContext } from 'react'

import CompaniesActionsContext from '../../../contexts/CompaniesActionsContext/CompaniesActionsContext'
import CompaniesRoutes from '../../../routes/CompaniesRoutes'
import Company from '../../../../../../../../api/companies/models/Company'
import CompanyContext from '../../../contexts/CompanyContext/CompanyContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { joinAttributes } from '../../../mappers/companyAttributesMapper'
import { joinBankAccounts } from '../../../mappers/companyBankAccountsMapper'
import useCompanyName from '../../../hooks/useCompanyName'
import { useHistory } from 'react-router'
import useLeadName from '../../../hooks/useLeadName'

interface UseCompanyViewReturn {
    map: (company: Company) => ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyView = (): UseCompanyViewReturn => {
    const history = useHistory()
    const companyState = useContext(CompanyContext)
    const actionsState = useContext(CompaniesActionsContext)
    const { getCompanyName } = useCompanyName(companyState.company.companyId)
    const { getLeadName } = useLeadName(companyState.company.leadId)

    const onClickEdit = useCallback((id: string) => history.push(`${CompaniesRoutes.Edit}/${id}`), [history])

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

    const onClickHistory = useCallback((id: string) => history.push(`${CompaniesRoutes.Changes}/${id}`), [history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const mapAttributes = useCallback(() => joinAttributes(companyState.company.attributeLinks), [
        companyState.company.attributeLinks
    ])

    const mapBankAccounts = useCallback(() => joinBankAccounts(companyState.company.bankAccounts), [
        companyState.company.bankAccounts
    ])

    const map = useCallback(
        (company: Company): ViewDataProps[] => [
            {
                label: 'Лид',
                value: getLeadName()
            },
            {
                label: 'Компания',
                value: getCompanyName()
            },
            { label: 'Фамилия', value: company.surname },
            { label: 'Имя', value: company.name },
            { label: 'Отчество', value: company.patronymic },
            { label: 'Телефон', value: company.phone },
            { label: 'Email', value: company.email },
            { label: 'ИНН', value: company.taxNumber },
            { label: 'Должность', value: company.post },
            { label: 'Почтовый индекс', value: company.postcode },
            { label: 'Страна', value: company.country },
            { label: 'Регион', value: company.region },
            { label: 'Район/провинция', value: company.province },
            { label: 'Город/населенный пункт', value: company.city },
            { label: 'Улица', value: company.street },
            { label: 'Дом/строение', value: company.house },
            { label: 'Квартира', value: company.apartment },
            { label: 'Дата рождения', value: company.birthDate },
            { label: 'Категории', value: mapBankAccounts() },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: company.isDeleted ? 'Да' : 'Нет' }
        ],
        [getCompanyName, getLeadName, mapAttributes, mapBankAccounts]
    )

    return { map, onClickEdit, onClickDelete, onClickRestore, onClickHistory, onClickCancel }
}

export default useCompanyView

import { useCallback, useContext } from 'react'

import CompaniesActionsContext from '../../../contexts/CompaniesActionsContext/CompaniesActionsContext'
import Company from '../../../../../../../../api/companies/models/Company'
import CompanyContext from '../../../contexts/CompanyContext/CompanyContext'
import { ViewDataProps } from '../../../../../../../components/common/grids/View/View'
import { getCompanyIndustryTypeName } from '../../../helpers/helpers/companyIndustryTypeHelper'
import { getCompanyTypeName } from '../../../helpers/helpers/companyTypeHelper'
import { joinAttributes } from '../../../mappers/companyAttributesMapper'
import { joinBankAccounts } from '../../../mappers/companyBankAccountsMapper'
import { useHistory } from 'react-router'
import useLeadName from '../../../hooks/useLeadName'

interface UseCompanyViewReturn {
    map: (company: Company) => ViewDataProps[]
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyView = (): UseCompanyViewReturn => {
    const history = useHistory()
    const companyState = useContext(CompanyContext)
    const actionsState = useContext(CompaniesActionsContext)
    const { getLeadName } = useLeadName(companyState.company.leadId)

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

    const mapAttributes = useCallback(() => joinAttributes(companyState.company.attributeLinks), [
        companyState.company.attributeLinks
    ])

    const mapBankAccounts = useCallback(() => joinBankAccounts(companyState.company.bankAccounts), [
        companyState.company.bankAccounts
    ])

    const map = useCallback(
        (company: Company): ViewDataProps[] => [
            { label: 'Лид', value: getLeadName() },
            { label: 'Тип', value: getCompanyTypeName(company.type) },
            { label: 'Род деятельности', value: getCompanyIndustryTypeName(company.industryType) },
            { label: 'Полное название', value: company.fullName },
            { label: 'Краткое название', value: company.shortName },
            { label: 'Телефон', value: company.phone },
            { label: 'Email', value: company.email },
            { label: 'ИНН', value: company.taxNumber },
            { label: 'ОГРН', value: company.registrationNumber },
            { label: 'Количество сотрудников', value: company.employeesCount.toString() },
            { label: 'Годовой оборот', value: company.yearlyTurnover.toString() },
            { label: 'Почтовый индекс (юридический адрес)', value: company.juridicalPostcode },
            { label: 'Страна (юридический адрес)', value: company.juridicalCountry },
            { label: 'Регион (юридический адрес)', value: company.juridicalRegion },
            { label: 'Район/провинция (юридический адрес)', value: company.juridicalProvince },
            { label: 'Город/населенный пункт (юридический адрес)', value: company.juridicalCity },
            { label: 'Улица (юридический адрес)', value: company.juridicalStreet },
            { label: 'Дом/строение (юридический адрес)', value: company.juridicalHouse },
            { label: 'Квартира (юридический адрес)', value: company.juridicalApartment },
            { label: 'Почтовый индекс (фактический адрес)', value: company.legalPostcode },
            { label: 'Страна (фактический адрес)', value: company.legalCountry },
            { label: 'Регион (фактический адрес)', value: company.legalRegion },
            { label: 'Район/провинция (фактический адрес)', value: company.legalProvince },
            { label: 'Город/населенный пункт (фактический адрес)', value: company.legalCity },
            { label: 'Улица (фактический адрес)', value: company.legalStreet },
            { label: 'Дом/строение (фактический адрес)', value: company.legalHouse },
            { label: 'Квартира (фактический адрес)', value: company.legalApartment },
            { label: 'Банковские реквизиты', value: mapBankAccounts() },
            { label: 'Атрибуты', value: mapAttributes() },
            { label: 'Удален', value: company.isDeleted ? 'Да' : 'Нет' }
        ],
        [getLeadName, mapAttributes, mapBankAccounts]
    )

    return { map, onClickDelete, onClickRestore, onClickCancel }
}

export default useCompanyView

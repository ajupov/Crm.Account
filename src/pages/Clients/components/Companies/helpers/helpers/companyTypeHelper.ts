import CompanyType from '../../../../../../../api/companies/models/CompanyType'
import { Dictionary } from '../../../../../../utils/dictionary/dictionaryUtils'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'

// TODO: Move to l10n
const CompanyTypeWithNames: Dictionary<string> = {
    1: 'Индивидуальная, без сотрудников',
    2: 'Коммерческая, с сотрудниками',
    3: 'Не коммерческая'
}

export function getCompanyTypesAsSelectOptions(): DropdownItemProps[] {
    return Object.entries(CompanyTypeWithNames).map(x => ({ value: x[0], text: x[1] } as DropdownItemProps))
}

export function getCompanyTypeName(type?: CompanyType): string {
    return type ? CompanyTypeWithNames[type] : ''
}

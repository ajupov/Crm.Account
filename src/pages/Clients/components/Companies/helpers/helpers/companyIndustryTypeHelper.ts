import CompanyIndustryType from '../../../../../../../api/companies/models/CompanyIndustryType'
import { Dictionary } from '../../../../../../utils/dictionary/dictionaryUtils'
import { DropdownItemProps } from '../../../../../../components/common/fields/Dropdown/Dropdown'

// TODO: Move to l10n
const CompanyIndustryTypeWithNames: Dictionary<string> = {
    0: 'Прочее',
    1: 'Транспорт',
    2: 'Информационные технологии',
    3: 'Телекоммуникации',
    4: 'Архитектура',
    5: 'Строительство',
    6: 'Образование',
    7: 'Общественное питание',
    8: 'Развлечения',
    9: 'Музыка'
}

export function getCompanyIndustryTypesAsSelectOptions(): DropdownItemProps[] {
    return Object.entries(CompanyIndustryTypeWithNames).map(x => ({ value: x[0], text: x[1] } as DropdownItemProps))
}

export function getCompanyIndustryTypeName(type?: CompanyIndustryType): string {
    return type ? CompanyIndustryTypeWithNames[type] : ''
}

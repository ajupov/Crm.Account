import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import StockConsumptionType from '../../../../../api/stock/models/StockConsumptionType'

// TODO: Move to l10n
const StockConsumptionTypeWithNames: { [key in number]: string } = {
    1: 'Возврат поставщику',
    2: 'Продажа клиенту',
    3: 'Списание при инвентаризации'
}

export function getStockConsumptionTypesAsSelectOptions(): DropdownItemProps[] {
    return Object.entries(StockConsumptionTypeWithNames).map(
        x => ({ value: parseInt(x[0]), text: x[1] } as DropdownItemProps)
    )
}

export function getStockConsumptionTypeName(type?: StockConsumptionType): string {
    return type ? StockConsumptionTypeWithNames[type] : ''
}

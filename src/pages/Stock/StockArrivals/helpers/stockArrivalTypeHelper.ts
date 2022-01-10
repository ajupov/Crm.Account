import { DropdownItemProps } from '../../../../components/common/fields/Dropdown/Dropdown'
import StockArrivalType from '../../../../../api/stock/models/StockArrivalType'

// TODO: Move to l10n
const StockArrivalTypeWithNames: { [key in number]: string } = {
    1: 'Приход от поставщика',
    2: 'Возврат от клиента',
    3: 'Переизбыток при инвентаризации'
}

export function getStockArrivalTypesAsSelectOptions(): DropdownItemProps[] {
    return Object.entries(StockArrivalTypeWithNames).map(
        x => ({ value: parseInt(x[0]), text: x[1] } as DropdownItemProps)
    )
}

export function getStockArrivalTypeName(type?: StockArrivalType): string {
    return type ? StockArrivalTypeWithNames[type] : ''
}

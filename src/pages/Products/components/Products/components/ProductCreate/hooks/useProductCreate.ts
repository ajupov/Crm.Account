import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { getAttributeTypeName, getProductTypesAsSelectOptions } from '../../../../../../../helpers/productTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFieldProps } from '../../../../../../../components/Create/Create'
import ProductContext from '../../../contexts/ProductContext/ProductContext'
import ProductType from '../../../../../../../../api/products/models/ProductType'
import { ProductsRoutes } from '../../../routes/ProductsRoutes'
import { useHistory } from 'react-router'

interface UseProductCreateReturn {
    fields: CreateFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCreate = (): UseProductCreateReturn => {
    const history = useHistory()
    const state = useContext(ProductContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setProduct({ ...state.product, type: data.value as ProductType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeKey = useCallback(
        (_, data: InputOnChangeData) => {
            state.setProduct({ ...state.product, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __: CheckboxProps) => {
            state.setProduct({ ...state.product, isDeleted: !state.product.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async (): Promise<void> => {
        await state.create()
        history.push(ProductsRoutes.Index)
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const fields: CreateFieldProps[] = useMemo(
        () => [
            {
                type: 'select',
                required: true,
                label: 'Тип',
                value: state.product.type,
                text: getAttributeTypeName(state.product.type),
                options: getProductTypesAsSelectOptions(),
                onChange: onChangeType
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.product.name,
                onChange: onChangeKey
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.product.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            onChangeType,
            onChangeKey,
            onChangeIsDeleted,
            state.product.type,
            state.product.name,
            state.product.isDeleted
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useProductCreate

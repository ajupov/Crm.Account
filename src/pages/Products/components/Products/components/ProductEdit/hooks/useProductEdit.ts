import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { getAttributeTypeName, getProductTypesAsSelectOptions } from '../../../../../../../helpers/productTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import { EditFieldProps } from '../../../../../../../components/Edit/Edit'
import ProductContext from '../../../contexts/ProductContext/ProductContext'
import ProductType from '../../../../../../../../api/products/models/ProductType'
import { ProductsRoutes } from '../../../routes/ProductsRoutes'
import { useHistory } from 'react-router'
import useProductsSelectOptions from '../../../hooks/useProductsSelectOptions'

interface UseProductEditReturn {
    fields: EditFieldProps[]
    isConfirmEnabled: boolean
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductEdit = (): UseProductEditReturn => {
    const history = useHistory()
    const { getActualStatuses, getAllStatuses } = useProductsSelectOptions()
    const state = useContext(ProductContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setProduct({ ...state.product, type: data.value as ProductType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStatus = useCallback(
        (_, data: DropdownProps) => {
            state.setProduct({ ...state.product, statusId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
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
        await state.update()
        history.push(ProductsRoutes.Index)
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductsRoutes.Changes}/${id}`), [history])

    const fields: EditFieldProps[] = useMemo(
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
                type: 'select',
                required: true,
                label: 'Статус',
                text: getAllStatuses().find(x => x.value === state.product.statusId)?.text,
                value: state.product.statusId,
                options: getActualStatuses(),
                onChange: onChangeStatus
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.product.name,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.product.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            getActualStatuses,
            getAllStatuses,
            onChangeIsDeleted,
            onChangeName,
            onChangeStatus,
            onChangeType,
            state.product.isDeleted,
            state.product.name,
            state.product.statusId,
            state.product.type
        ]
    )

    return { fields, isConfirmEnabled, onClickHistory, onClickConfirm, onClickCancel }
}

export default useProductEdit

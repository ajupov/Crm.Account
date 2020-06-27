import { CheckboxProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { getProductTypeName, getProductTypesAsSelectOptions } from '../../../helpers/productTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../../../components/common/forms/CreateForm/CreateForm'
import ProductContext from '../../../contexts/ProductContext/ProductContext'
import ProductType from '../../../../../../../../api/products/models/ProductType'
import { useHistory } from 'react-router'
import useProductsSelectOptions from '../../../hooks/useProductsSelectOptions'

interface UseProductCreateReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductCreate = (): UseProductCreateReturn => {
    const history = useHistory()
    const {
        getActualProducts,
        getAllProducts,
        getActualStatuses,
        getAllStatuses,
        getActualCategories,
        getActualAttributes,
        getAllAttributes
    } = useProductsSelectOptions()
    const state = useContext(ProductContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeParentProductId = useCallback(
        (_, data: DropdownProps) => {
            state.setProduct({ ...state.product, parentProductId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setProduct({ ...state.product, type: data.value as ProductType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeStatusId = useCallback(
        (_, data: DropdownProps) => {
            state.setProduct({ ...state.product, statusId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCategoryIds = useCallback(
        (_, { value }: DropdownProps) => {
            state.setProduct({
                ...state.product,
                categoryLinks: (value as string[]).map(x => ({
                    id: '',
                    productId: state.product.id,
                    productCategoryId: x
                }))
            })
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

    const onChangeVendorCode = useCallback(
        (_, data: InputOnChangeData) => {
            state.setProduct({ ...state.product, vendorCode: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangePrice = useCallback(
        (_, data: InputOnChangeData) => {
            state.setProduct({ ...state.product, price: (data.value as unknown) as number })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeKey = useCallback(
        (index: number, value: string) => {
            if (!state.product.attributeLinks) {
                return
            }

            state.product.attributeLinks[index].productAttributeId = value

            state.setProduct({
                ...state.product
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeAttributeValue = useCallback(
        (index: number, value: string) => {
            if (!state.product.attributeLinks) {
                return
            }

            const neww = [...state.product.attributeLinks]

            neww[index].value = value

            state.setProduct({
                ...state.product,
                attributeLinks: neww
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onDeleteAttribute = useCallback(
        (index: number) => {
            state.setProduct({
                ...state.product,
                attributeLinks: state.product.attributeLinks?.filter((_, i) => i !== index)
            })

            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickAddAttributeItem = useCallback(() => {
        state.setProduct({ ...state.product, attributeLinks: [...(state.product.attributeLinks ?? []), {}] })

        setIsConfirmEnabled(true)
    }, [state])

    const onChangeIsHidden = useCallback(
        (_, __: CheckboxProps) => {
            state.setProduct({ ...state.product, isHidden: !state.product.isHidden })
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

    const onClickConfirm = useCallback(async () => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: CreateFormFieldProps[] = useMemo(
        () => [
            {
                type: 'dropdown',
                required: true,
                label: 'Родительский продукт',
                text: getAllProducts().find(x => x.value === state.product.parentProductId)?.text,
                value: state.product.parentProductId,
                options: getActualProducts(),
                onChange: onChangeParentProductId
            },
            {
                type: 'dropdown',
                required: true,
                label: 'Тип',
                value: state.product.type,
                text: getProductTypeName(state.product.type),
                options: getProductTypesAsSelectOptions(),
                onChange: onChangeType
            },
            {
                type: 'dropdown',
                required: true,
                label: 'Статус',
                text: getAllStatuses().find(x => x.value === state.product.statusId)?.text,
                value: state.product.statusId,
                options: getActualStatuses(),
                onChange: onChangeStatusId
            },
            {
                type: 'dropdown',
                multiple: true,
                required: true,
                label: 'Категории',
                value: state.product.categoryLinks?.map(x => x.productCategoryId ?? ''),
                options: getActualCategories(),
                onChange: onChangeCategoryIds
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.product.name,
                onChange: onChangeName
            },
            {
                type: 'text',
                topLabel: 'Артикул',
                value: state.product.vendorCode,
                onChange: onChangeVendorCode
            },
            {
                type: 'number',
                required: true,
                topLabel: 'Цена',
                value: state.product.price,
                onChange: onChangePrice
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: getActualAttributes(),
                items: state.product.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.productAttributeId ?? '',
                    onChangeKey: onChangeAttributeKey,
                    value: x.value ?? '',
                    text: getAllAttributes().find(a => a.value === x.productAttributeId)?.text,
                    onChangeValue: onChangeAttributeValue,
                    onClickDelete: onDeleteAttribute
                })),
                onClickAddItem: onClickAddAttributeItem
            },
            {
                type: 'checkbox',
                label: 'Черновик',
                checked: state.product.isHidden,
                onChange: onChangeIsHidden
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.product.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            getAllProducts,
            state.product.parentProductId,
            state.product.type,
            state.product.statusId,
            state.product.categoryLinks,
            state.product.name,
            state.product.vendorCode,
            state.product.price,
            state.product.attributeLinks,
            state.product.isHidden,
            state.product.isDeleted,
            getActualProducts,
            onChangeParentProductId,
            onChangeType,
            getAllStatuses,
            getActualStatuses,
            onChangeStatusId,
            getActualCategories,
            onChangeCategoryIds,
            onChangeName,
            onChangeVendorCode,
            onChangePrice,
            getActualAttributes,
            onClickAddAttributeItem,
            onChangeIsHidden,
            onChangeIsDeleted,
            onChangeAttributeKey,
            getAllAttributes,
            onChangeAttributeValue,
            onDeleteAttribute
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useProductCreate

import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { getProductTypeName, getProductTypesAsSelectOptions } from '../../helpers/productTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../../components/common/forms/CreateForm/CreateForm'
import ProductContext from '../../contexts/ProductContext/ProductContext'
import ProductType from '../../../../../../../api/products/models/ProductType'
import { useHistory } from 'react-router'
import useProductAttributesLoad from '../load/useProductAttributesLoad'
import useProductCategoriesLoad from '../load/useProductCategoriesLoad'
import useProductLoad from '../load/useProductLoad'
import useProductStatusesLoad from '../load/useProductStatusesLoad'
import useProductsAutocomplete from '../autocomplete/useProductsAutocomplete'

interface UseProductOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductOnChange = (): UseProductOnChangeReturn => {
    const history = useHistory()
    const state = useContext(ProductContext)
    const { loadProducts, productsAsOptions } = useProductsAutocomplete()
    const { product: parentProduct } = useProductLoad(state.product.parentProductId)
    const { statusesAsOptions } = useProductStatusesLoad()
    const { categoriesAsOptions } = useProductCategoriesLoad()
    const { attributesAsOptions } = useProductAttributesLoad()

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
        (_, data: DropdownProps) => {
            state.setProduct({
                ...state.product,
                categoryLinks: (data.value as string[]).map(x => ({
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
            state.setProduct({ ...state.product, price: data.value as unknown as number })
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

            const attributeLinks = [...state.product.attributeLinks]

            attributeLinks[index].value = value

            state.setProduct({
                ...state.product,
                attributeLinks
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
        (_, __) => {
            state.setProduct({ ...state.product, isHidden: !state.product.isHidden })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirmCreate = useCallback(async () => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickConfirmUpdate = useCallback(async () => {
        await state.update()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: CreateFormFieldProps[] = useMemo(
        () => [
            {
                type: 'autocomplete',
                label: 'Родительский продукт',
                value: state.product.parentProductId,
                text: parentProduct?.name,
                load: loadProducts,
                options: productsAsOptions,
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
                value: state.product.statusId,
                options: statusesAsOptions,
                onChange: onChangeStatusId
            },
            {
                type: 'dropdown',
                multiple: true,
                label: 'Категории',
                value: state.product.categoryLinks?.map(x => x.productCategoryId ?? ''),
                options: categoriesAsOptions,
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
                required: true,
                topLabel: 'Артикул',
                value: state.product.vendorCode,
                onChange: onChangeVendorCode
            },
            {
                type: 'number',
                topLabel: 'Цена',
                value: state.product.price,
                onChange: onChangePrice
            },
            {
                type: 'attributes',
                label: 'Атрибуты',
                options: attributesAsOptions,
                items: state.product.attributeLinks?.map((x, i) => ({
                    index: i,
                    key: x.productAttributeId ?? '',
                    onChangeKey: onChangeAttributeKey,
                    value: x.value ?? '',
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
            }
        ],
        [
            state.product.parentProductId,
            state.product.type,
            state.product.statusId,
            state.product.categoryLinks,
            state.product.name,
            state.product.vendorCode,
            state.product.price,
            state.product.attributeLinks,
            state.product.isHidden,
            parentProduct,
            loadProducts,
            productsAsOptions,
            onChangeParentProductId,
            onChangeType,
            statusesAsOptions,
            onChangeStatusId,
            categoriesAsOptions,
            onChangeCategoryIds,
            onChangeName,
            onChangeVendorCode,
            onChangePrice,
            attributesAsOptions,
            onClickAddAttributeItem,
            onChangeIsHidden,
            onChangeAttributeKey,
            onChangeAttributeValue,
            onDeleteAttribute
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useProductOnChange

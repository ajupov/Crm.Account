import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import StockBalanceContext from '../../contexts/StockBalanceContext/StockBalanceContext'
import { useHistory } from 'react-router'
import useProductLoad from '../load/useProductLoad'
import useProductsAutocomplete from '../autocomplete/useProductsAutocomplete'
import useStockRoomsLoad from '../load/useStockRoomsLoad'

interface UseStockBalanceOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockBalanceOnChange = (): UseStockBalanceOnChangeReturn => {
    const history = useHistory()
    const state = useContext(StockBalanceContext)
    const { roomsAsOptions } = useStockRoomsLoad()
    const { product } = useProductLoad(state.stockBalance.productId)
    const { loadProducts: loadProductsAutocomplete, productsAsOptions } = useProductsAutocomplete()

    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeRoomId = useCallback(
        (_, data: DropdownProps) => {
            state.setStockBalance({ ...state.stockBalance, roomId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeProductId = useCallback(
        (_, data: DropdownProps) => {
            state.setStockBalance({ ...state.stockBalance, productId: data.value as string })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeCount = useCallback(
        (_, data: InputOnChangeData) => {
            state.setStockBalance({ ...state.stockBalance, count: parseFloat(data.value) })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setStockBalance({ ...state.stockBalance, isDeleted: !state.stockBalance.isDeleted })
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

    const fields: FormFieldProps[] = useMemo(
        () => [
            {
                type: 'group',
                fields: [
                    {
                        type: 'dropdown',
                        label: 'Склад',
                        width: '4',
                        value: state.stockBalance.roomId,
                        options: roomsAsOptions,
                        onChange: onChangeRoomId
                    },
                    {
                        type: 'autocomplete',
                        label: 'Продукт',
                        width: '6',
                        value: state.stockBalance.productId,
                        text: product?.name,
                        load: loadProductsAutocomplete,
                        options: productsAsOptions,
                        onChange: onChangeProductId
                    },
                    {
                        type: 'number',
                        label: 'Количество',
                        width: '2',
                        value: state.stockBalance.count,
                        onChange: onChangeCount
                    }
                ]
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.stockBalance.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            state.stockBalance.roomId,
            state.stockBalance.productId,
            state.stockBalance.count,
            state.stockBalance.isDeleted,
            roomsAsOptions,
            onChangeRoomId,
            product,
            loadProductsAutocomplete,
            productsAsOptions,
            onChangeProductId,
            onChangeCount,
            onChangeIsDeleted
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useStockBalanceOnChange

import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFieldProps } from '../../../../../../../components/Create/Create'
import ProductStatusContext from '../../../contexts/ProductStatusContext/ProductStatusContext'
import { useHistory } from 'react-router'

interface UseProductStatusCreateReturn {
    fields: CreateFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductStatusCreate = (): UseProductStatusCreateReturn => {
    const history = useHistory()
    const state = useContext(ProductStatusContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setStatus({ ...state.status, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __: CheckboxProps) => {
            state.setStatus({ ...state.status, isDeleted: !state.status.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async (): Promise<void> => {
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const fields: CreateFieldProps[] = useMemo(
        () => [
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.status.name,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.status.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [onChangeIsDeleted, onChangeName, state.status.isDeleted, state.status.name]
    )

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useProductStatusCreate

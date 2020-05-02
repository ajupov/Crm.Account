import { CheckboxProps, InputOnChangeData } from 'semantic-ui-react'
import { useCallback, useContext, useMemo, useState } from 'react'

import { EditFieldProps } from '../../../../../../../components/Edit/Edit'
import ProductStatusContext from '../../../contexts/ProductStatusContext/ProductStatusContext'
import { ProductStatusesRoutes } from '../../../routes/ProductStatusesRoutes'
import { useHistory } from 'react-router'

interface UseProductStatusEditReturn {
    fields: EditFieldProps[]
    isConfirmEnabled: boolean
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const useProductStatusEdit = (): UseProductStatusEditReturn => {
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
        await state.update()
        history.push(ProductStatusesRoutes.Index)
    }, [state, history])

    const onClickCancel = useCallback((): void => history.goBack(), [history])

    const onClickHistory = useCallback((id: string): void => history.push(`${ProductStatusesRoutes.Changes}/${id}`), [
        history
    ])

    const fields: EditFieldProps[] = useMemo(
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

    return { fields, isConfirmEnabled, onClickHistory, onClickConfirm, onClickCancel }
}

export default useProductStatusEdit

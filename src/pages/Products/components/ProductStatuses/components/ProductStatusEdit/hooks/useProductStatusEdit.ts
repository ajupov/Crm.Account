import { useCallback, useContext, useMemo, useState } from 'react'

import { EditFormFieldProps } from '../../../../../../../components/common/forms/EditForm/EditForm'
import ProductStatusContext from '../../../contexts/ProductStatusContext/ProductStatusContext'
import ProductStatusesRoutes from '../../../routes/ProductStatusesRoutes'
import { useHistory } from 'react-router'

interface UseProductStatusEditReturn {
    fields: EditFormFieldProps[]
    isConfirmEnabled: boolean
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductStatusEdit = (): UseProductStatusEditReturn => {
    const history = useHistory()
    const state = useContext(ProductStatusContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data) => {
            state.setStatus({ ...state.status, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setStatus({ ...state.status, isDeleted: !state.status.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async () => {
        await state.update()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const onClickHistory = useCallback((id: string) => history.push(`${ProductStatusesRoutes.Changes}/${id}`), [
        history
    ])

    const fields: EditFormFieldProps[] = useMemo(
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

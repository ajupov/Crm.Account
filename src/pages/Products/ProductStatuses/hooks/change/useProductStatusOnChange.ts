import { useCallback, useContext, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import { InputOnChangeData } from 'semantic-ui-react'
import ProductStatusContext from '../../contexts/ProductStatusContext/ProductStatusContext'
import { useHistory } from 'react-router'

interface UseProductStatusOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useProductStatusOnChange = (): UseProductStatusOnChangeReturn => {
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
        (_, __) => {
            state.setStatus({ ...state.status, isDeleted: !state.status.isDeleted })
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
                type: 'text',
                required: true,
                label: 'Наименование',
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

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useProductStatusOnChange

import { useCallback, useContext, useMemo, useState } from 'react'

import CustomerSourceContext from '../../contexts/CustomerSourceContext/CustomerSourceContext'
import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import { InputOnChangeData } from 'semantic-ui-react'
import { useHistory } from 'react-router'

interface UseCustomerSourceOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCustomerSourceOnChange = (): UseCustomerSourceOnChangeReturn => {
    const history = useHistory()
    const state = useContext(CustomerSourceContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setSource({ ...state.source, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setSource({ ...state.source, isDeleted: !state.source.isDeleted })
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
                value: state.source.name,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.source.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [onChangeIsDeleted, onChangeName, state.source.isDeleted, state.source.name]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useCustomerSourceOnChange

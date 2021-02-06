import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../components/common/forms/CreateForm/CreateForm'
import DealStatusContext from '../../contexts/DealStatusContext/DealStatusContext'
import { InputOnChangeData } from 'semantic-ui-react'
import { useHistory } from 'react-router'

interface UseDealStatusOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useDealStatusOnChange = (): UseDealStatusOnChangeReturn => {
    const history = useHistory()
    const state = useContext(DealStatusContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setStatus({ ...state.status, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsFinish = useCallback(
        (_, __) => {
            state.setStatus({ ...state.status, isFinish: !state.status.isFinish })
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

    const fields: CreateFormFieldProps[] = useMemo(
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
                label: 'Конечный',
                checked: state.status.isFinish,
                onChange: onChangeIsFinish
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.status.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            onChangeIsDeleted,
            onChangeIsFinish,
            onChangeName,
            state.status.isDeleted,
            state.status.isFinish,
            state.status.name
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useDealStatusOnChange

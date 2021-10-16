import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../components/common/forms/CreateForm/CreateForm'
import { InputOnChangeData } from 'semantic-ui-react'
import TaskTypeContext from '../../contexts/TaskTypeContext/TaskTypeContext'
import { useHistory } from 'react-router'

interface UseTaskTypeOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useTaskTypeOnChange = (): UseTaskTypeOnChangeReturn => {
    const history = useHistory()
    const state = useContext(TaskTypeContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setType({ ...state.type, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setType({ ...state.type, isDeleted: !state.type.isDeleted })
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
                value: state.type.name,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.type.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [onChangeIsDeleted, onChangeName, state.type.isDeleted, state.type.name]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useTaskTypeOnChange

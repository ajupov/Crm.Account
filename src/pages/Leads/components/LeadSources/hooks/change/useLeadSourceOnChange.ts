import { useCallback, useContext, useMemo, useState } from 'react'

import { CreateFormFieldProps } from '../../../../../../components/common/forms/CreateForm/CreateForm'
import { InputOnChangeData } from 'semantic-ui-react'
import LeadSourceContext from '../../contexts/LeadSourceContext/LeadSourceContext'
import { useHistory } from 'react-router'

interface UseLeadSourceOnChangeReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useLeadSourceOnChange = (): UseLeadSourceOnChangeReturn => {
    const history = useHistory()
    const state = useContext(LeadSourceContext)
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

    const fields: CreateFormFieldProps[] = useMemo(
        () => [
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
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

export default useLeadSourceOnChange

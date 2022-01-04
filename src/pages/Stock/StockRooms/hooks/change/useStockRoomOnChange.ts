import { useCallback, useContext, useMemo, useState } from 'react'

import { FormFieldProps } from '../../../../../components/common/forms/FormField'
import { InputOnChangeData } from 'semantic-ui-react'
import StockRoomContext from '../../contexts/StockRoomContext/StockRoomContext'
import { useHistory } from 'react-router'

interface UseStockRoomOnChangeReturn {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirmCreate: () => void
    onClickConfirmUpdate: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useStockRoomOnChange = (): UseStockRoomOnChangeReturn => {
    const history = useHistory()
    const state = useContext(StockRoomContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeName = useCallback(
        (_, data: InputOnChangeData) => {
            state.setStatus({ ...state.room, name: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setStatus({ ...state.room, isDeleted: !state.room.isDeleted })
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
                value: state.room.name,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.room.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [onChangeIsDeleted, onChangeName, state.room.isDeleted, state.room.name]
    )

    return { fields, isConfirmEnabled, onClickConfirmCreate, onClickConfirmUpdate, onClickCancel }
}

export default useStockRoomOnChange

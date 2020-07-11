import {
    getAttributeTypeName,
    getAttributeTypesAsSelectOptions
} from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import CompanyAttributeContext from '../../../contexts/CompanyAttributeContext/CompanyAttributeContext'
import CompanyAttributeType from '../../../../../../../../api/companies/models/CompanyAttributeType'
import CompanyAttributesRoutes from '../../../routes/CompanyAttributesRoutes'
import { EditFormFieldProps } from '../../../../../../../components/common/forms/EditForm/EditForm'
import { useHistory } from 'react-router'

interface UseCompanyAttributeEditReturn {
    fields: EditFormFieldProps[]
    isConfirmEnabled: boolean
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyAttributeEdit = (): UseCompanyAttributeEditReturn => {
    const history = useHistory()
    const state = useContext(CompanyAttributeContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data) => {
            state.setAttribute({ ...state.attribute, type: data.value as CompanyAttributeType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeName = useCallback(
        (_, data) => {
            state.setAttribute({ ...state.attribute, key: data.value })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeIsDeleted = useCallback(
        (_, __) => {
            state.setAttribute({ ...state.attribute, isDeleted: !state.attribute.isDeleted })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onClickConfirm = useCallback(async () => {
        await state.update()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const onClickHistory = useCallback((id: string) => history.push(`${CompanyAttributesRoutes.Changes}/${id}`), [
        history
    ])

    const fields: EditFormFieldProps[] = useMemo(
        () => [
            {
                type: 'dropdown',
                required: true,
                label: 'Тип',
                value: state.attribute.type,
                text: getAttributeTypeName(state.attribute.type),
                options: getAttributeTypesAsSelectOptions(),
                onChange: onChangeType
            },
            {
                type: 'text',
                required: true,
                topLabel: 'Наименование',
                value: state.attribute.key,
                onChange: onChangeName
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.attribute.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            onChangeIsDeleted,
            onChangeName,
            onChangeType,
            state.attribute.isDeleted,
            state.attribute.key,
            state.attribute.type
        ]
    )

    return { fields, isConfirmEnabled, onClickHistory, onClickConfirm, onClickCancel }
}

export default useCompanyAttributeEdit

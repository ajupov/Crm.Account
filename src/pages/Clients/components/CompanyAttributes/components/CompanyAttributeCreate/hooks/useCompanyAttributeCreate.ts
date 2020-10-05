import { DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import {
    getAttributeTypeName,
    getAttributeTypesAsSelectOptions
} from '../../../../../../../helpers/entityAttributeTypeHelper'
import { useCallback, useContext, useMemo, useState } from 'react'

import CompanyAttributeContext from '../../../contexts/CompanyAttributeContext/CompanyAttributeContext'
import CompanyAttributeType from '../../../../../../../../api/companies/models/CompanyAttributeType'
import { CreateFormFieldProps } from '../../../../../../../components/common/forms/CreateForm/CreateForm'
import { useHistory } from 'react-router'

interface UseCompanyAttributeCreateReturn {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const useCompanyAttributeCreate = (): UseCompanyAttributeCreateReturn => {
    const history = useHistory()
    const state = useContext(CompanyAttributeContext)
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false)

    const onChangeType = useCallback(
        (_, data: DropdownProps) => {
            state.setAttribute({ ...state.attribute, type: data.value as CompanyAttributeType })
            setIsConfirmEnabled(true)
        },
        [state]
    )

    const onChangeKey = useCallback(
        (_, data: InputOnChangeData) => {
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
        await state.create()
        history.goBack()
    }, [state, history])

    const onClickCancel = useCallback(() => history.goBack(), [history])

    const fields: CreateFormFieldProps[] = useMemo(
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
                onChange: onChangeKey
            },
            {
                type: 'checkbox',
                label: 'Удален',
                checked: state.attribute.isDeleted,
                onChange: onChangeIsDeleted
            }
        ],
        [
            onChangeType,
            onChangeKey,
            onChangeIsDeleted,
            state.attribute.type,
            state.attribute.key,
            state.attribute.isDeleted
        ]
    )

    return { fields, isConfirmEnabled, onClickConfirm, onClickCancel }
}

export default useCompanyAttributeCreate

import React, { FC, useContext } from 'react'

import DealTypeContext from '../../contexts/DealTypeContext/DealTypeContext'
import DealTypesRoutes from '../../routes/DealTypesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useDealTypeOnChange from '../../hooks/change/useDealTypeOnChange'
import useDealTypesActions from '../../contexts/DealTypesActionsContext/hooks/useDealTypesActions'

const DealTypeEditForm: FC = () => {
    const state = useContext(DealTypeContext)
    const { isLoading } = useDealTypesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useDealTypeOnChange()

    return state.type.id ? (
        <EditForm
            id={state.type.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.type.createDateTime}
            lastModifyDateTime={state.type.modifyDateTime}
            historyLink={DealTypesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default DealTypeEditForm
